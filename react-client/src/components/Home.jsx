
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';

// npm install --save bootstrap
// npm install react-bootstrap --save

class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			galleryItems: [{nickname: "Zolfaa", itemName: "Drill1", phoneNum:"123" }, {nickname: "Mais", itemName: "Drill2", phoneNum:"987"}, {nickname:"Ali", itemName: "Drill3", phoneNum:"9876"}]
		}
		// this.handleClickRegister = this.handleClickRegister.bind(this);
		// this.handleClickSignIn = this.handleClickSignIn.bind(this);
	}

	// componentDidMount() {


render(){ // Render function should render only one component

	return (
		<div>
            <h1>Home Page!</h1>

            <div>
             <div>
			    <a href="/register" >Register</a>
			    <a href="/login" >Sign In</a>
			    <a href="/search">Search</a>
			    <a href="/addItems">Add Items</a>
			    <a href="/search">Search</a>
			    <br/>
			  </div>

			 <div className="container">
			  <div className="row">

			  {this.state.galleryItems.map(item =>

       				<div key = {item._id}>
                   	<div className='col-lg-3 col-md-4 col-sm-6'>
				    <br/>
				   	</div>
				   	<div>
				    <p>{item.nickname}</p>
				    <br/>
				    <p>{item.itemName}</p>
				    <br/>
				    <p>{item.phoneNum}</p>
				    <br/>
				   	</div>
				    </div>
				)}

       			
			 </div>
			</div>

	      </div>
	    </div>

	  )
   }
}

export default Home;
