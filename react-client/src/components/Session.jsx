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
		this.handleClickLogOut = this.handleClickLogOut.bind(this);
	}

	handleClickLogOut(){
		console.log("logout button")
	 window.location.href = '/login';
	}

	componentDidMount() {
	}

	render(){
		return (
			<div>
			  <div> 
			    
			    <a href="/search">Search</a>
			    <a href="/addItems">Add Items</a>
			    <a href="/search">Search</a>
			   <button onClick={this.handleClickLogOut}>Log Out</button>

			  </div>

			  <p>Hello Logged In user!</p>
			</div>
			);
	}
}

export default Home;

