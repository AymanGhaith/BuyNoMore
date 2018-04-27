      var express = require('express')
      var path = require('path');
      var bodyParser = require('body-parser');
      var db = require('./db/index.js')
      var mongoose = require('mongoose');
      var session = require('express-session')
      var cookieParser = require('cookie-parser')
      var bcrypt = require('bcrypt');
      var helper = require('./helper/utility')
      var app = express()



      var saltRounds = 10;
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({ extended: false }));
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      // app.use(express.static(path.join(__dirname, 'client')))
      console.log("", __dirname)
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////        
      //Be sure !!!
      // mongoose.Promise = global.Promise;
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      // session :: 
      // authinticate transzction between Server and client ..  
      app.use(session({
      	secret: 'any string of text', 
       resave: true, //even if nothing changed in the files ,, gana save it again .. 
       saveUninitialized: false // for the database 
      }));
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      app.use(cookieParser())
      app.set('view engine', 'html');
      app.set('views',path.join(__dirname,'client'))
      app.engine('html', require('ejs').renderFile);
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      app.post('/login', function(req,res){
      var username = req.body.username;
      var password = req.body.password;
      db.Users.findOne({username:username}, function(err, data){
      console.log("here's the data", data)
      if(err){
        console.log('login error');
      }
      else {
        if (data === null) {
         console.log('here')
         res.sendStatus(404)
       }
       else {
        bcrypt.compare(password, data.password, function(err, found){
          if(found) {
            helper.createSession(req, res, data.username);
            
          }
          else {
            console.log('session error');
            res.sendStatus(404);
            
          }
        })
      }

      }
      })

      })
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      app.post('/signup', function(req,res){
        console.log(req.body)
      var username = req.body.username;
      var password = req.body.password;
      var email = req.body.email;
      //var passwordCnf = passwordCnf;
      db.Users.find({ username: username }, function(err, data){ 
        console.log('data shoul be seen', data)
        if(err){
         res.sendStatus(404)
       }else{
         if(data.length > 0){
          res.sendStatus(404)
        }
        else{
          bcrypt.genSalt(saltRounds, function(err, salt) {
           if(err){
            console.log('error',err)
          }
          bcrypt.hash(password, salt, function(err, hash) {
           if(err){
            console.log('error in hash password')
          }
          console.log("zzzzzzzzzzzzzzzzzzz",username);
          console.log("zzzzzzzzzzzzzzzzzzz",email);
          var user = new db.Users({
            username:username,
            email:email,
            password:hash
          })
          console.log("zzzzzzzzzzzzzzzzzzz",user);
          user.save(function(err, data){
           if(err){
            console.log(err)
          }
          else{
            helper.createSession(req, res, data.username);
            res.sendStatus(200)
          }
          // if (password!== passwordCnf){
          //   res.sendStatus(200);
          // }
          // else{
          //   res.sendStatus(404);
          // }
        })	
        });
        });
        }
      }	

      }) 
      });

      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      app.get('/logout', function(req, res) {
      req.session.destroy(function() {
        res.sendStatus(200);
      });
      });
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


      app.get('/getUser', function (req, res) {

      db.Users.findOne({username:req.session.user}, function(err, data) {
       if (err) {
         console.log(err);
       }
       else {

         res.send(data)
       }
      })
      })

      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // Now using promises :: 
      //in the obj. of find we will defide whatever we need to call ..
        // here we will ::
      //when find 'for instance' finish ,, then i promise to excute the function inside (then) ..

      sellectAll: (req, res) => {
        User.find ({},(err, users) =>{
          if (err){
            console.log(err)
          }
          else{
            res.status(200).json(users);
          }
        });
      }

      //before starting the Search fun. ,, we need to merge the items and add items .. 
      Search: (req, res) =>{
        Items.find({},(err, items)=> {
          if (err){
            console.log(err)
          }
          else{
            res.status(200).json(items);
          }
        });


      }

      // the value we get from the customer ,, to be stored in the req. obj.

      // for tetsting : console.log 

        //promises::

      // getUserItems: (req, res) => {

      //   const {userId} = req.params;
      //   User.findbyId({userID})
      //   .then (userId => res.status(200).json(UserId))
      //   console.log('user',user); 
      // },

      getUserItems: (req, res) => {
        const {userId} = req.params;
        User.findbyId({userId} , (err, items) => {
          if (err){
            console.log(err)
          }
          else{
            res.status(200).json(items)
          }
        })
      }
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      newUserItem: (req, res, next) => {

        // creat a new item 
      const newItem = new Item (req.body);
      console.log('newItem', newItem); 
         newItem.save((err, data)=>{
        if(err){
          res.sendStatus(404)
        }
        res.sendStatus(201)(item)
      })
      };
      /////////////////////////////////////////////////////////////////
      //Catch 404 Errors and forward them to error handler ::
      app.use(function(req, res, next){
      var err = new Error ('Error !! ');
      err.status = 404;
      next(err);

      });
      ///////////////////////////////////////////////////////////
      //Error handler function ::
      app.use(function(err, req, res, next){
      var error = app.get('env');
      if (error === 'development'){
       return error
      }
      return {}

      var status = err.status;
      status = err.status || 500;

      	//Respond to client 

      	res.status(status).json({
      		error : {
      			message: error.message
      		}
      	});
      	// Respond for testing 

      	console.log(err);	
      });

      /////////////////////////////////////////////////////////////

      var port = process.env.PORT || 3000;
      app.listen(port, function (){ console.log("I'm listining tho!" + " " + port)})


      //_____________________ DONE :D ____________________//



