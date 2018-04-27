import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { BrowserRouter, Route, Link, IndexRoute, hashHistory, browserHistory , Switch  } from "react-router-dom";
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';
class Login extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: ''
		}
		this.handleClickLogin = this.handleClickLogin.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangePass = this.handleChangePass.bind(this);
	}

	handleClickLogin(){
		// console.log(this.state);
		$.ajax({
			type:'POST',
			url:'/login',
			data:{
				email: this.state.email,
				password: this.state.password
			},
			success: (data) => {
				console.log("Success in login POST!", data);
				window.location.href = '/session';
			},
			error: (req, status, err) => {
				console.log("Error in login POST!");
				//$("#errorLogin").show();
			}
		})
	}

	handleChangeEmail (evt) {
		this.setState({ email: evt.target.value });
	}

	handleChangePass (evt) {
		this.setState({ password: evt.target.value });
	}

	render(){

		return (
			<div>
			<h1>Sign In</h1>
			<br/>
			<label>Email Address:</label>
			<br/>
			<input type="text" name="Email Address" onChange={this.handleChangeEmail}/>
			<br/>
			<label>Password:</label>
			<br/>
			<input type="password" name="Password" onChange={this.handleChangePass}/>
			<br/>
			<button onClick={this.handleClickLogin}>Sign In</button>
			</div>
			);
	}


}
export default Login;
