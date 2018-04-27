
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
			galleryItems: []
		}
		// this.handleClickRegister = this.handleClickRegister.bind(this);
		// this.handleClickSignIn = this.handleClickSignIn.bind(this);
	}

	componentDidMount() {
	}

	render(){
		return (
			<div>
			  <div>
			    <a href="/register" >Register</a>
			    <a href="/login" >Sign In</a>
			    <a href="/search">Search</a>
			    <a href="/addItems">Add Items</a>
			    <a href="/search">Search</a>
			    <br/>
			  </div>


			   <div class="container">
			    <div class="row">

                  {
                  	this.state.galleryItems.map( (item) => {
                    return (
                      <div class='col-lg-3 col-md-4 col-sm-6'>
				        <a href="#"><img src= {item.src} className="img-responsive img-thumbnail"/></a>
				        <br/>
				      </div>,
				      
				      <div>
				        <p>{item.OwnerName}</p>
				        <br/>
				        <a href="#">{item.title}</a>
				        <br/>
				        <a href="#">{item.price}</a>
				        <br/>
				      </div>
                    )
                })
                  }
			    </div>
			  </div>
			</div>
			);
	}
}

export default Home;
