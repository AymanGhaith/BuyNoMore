import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { BrowserRouter, Route, Link, IndexRoute, hashHistory, browserHistory , Switch  } from "react-router-dom";
class Register extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			fullName: '',
			email: '',
			password: '',
			confirmPass:''
		}
		this.handleClickRegister = this.handleClickRegister.bind(this);
		this.handleChangeFullName = this.handleChangeFullName.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangePass = this.handleChangePass.bind(this);
		this.handleChangeConfirmPass = this.handleChangeConfirmPass.bind(this);
	}
	handleClickRegister(){
		console.log(this.state);
		$.ajax({
			type:'POST',
			url: '/register',
			data:{
				fullName: this.state.fullName,
				email: this.state.email,
				password: this.state.password,
				confirmPass: this.state.confirmPass
			},
			success: (data) => {
				alert(1)
				console.log("Success in register POST!", data);
				window.location.href = "http://localhost:3000/login";

			},
			error: (err) => {
				alert(err)
				console.log("Error in register POST!", err);
			}
		})
	}
	handleChangeFullName(e){
		this.setState({ fullName: e.target.value });
		console.log(this.state.fullName);
	}
	handleChangeEmail(e){
		this.setState({ email: e.target.value });
		console.log(this.state.email);
	}
	handleChangePass(evt){
		this.setState({ password: evt.target.value });
		console.log(this.state.password);
	}
	handleChangeConfirmPass(evt){
		this.setState({ confirmPass: evt.target.value });
		console.log(this.state.confirmPass);
	}
	render(){

		return (
			<div className = 'container'>
			<form>
			<h1 className = "form-group">Sign Up</h1>
			<br/>
			<label >First Name</label>
			<br/>
			<input className="form-control" id="1" aria-describedby="emailHelp" placeholder="Enter Full Name" type="text" name="Full Name" onChange={this.handleChangeFullName}/>
			<br/>
			<label>Email Address:</label>
			<br/>
			<input className="form-control" id="2" aria-describedby="emailHelp" placeholder="Email Address" type="text" name="Email Address" onChange={this.handleChangeEmail}/>
			<br/>
			<label>Password:</label>
			<br/>
			<input className="form-control" id="3" aria-describedby="emailHelp" placeholder="Password" type="password" name="Password" onChange={this.handleChangePass}/>
			<br/>
			<label>Confirm Password:</label>
			<br/>
			<input className="form-control" id="4" aria-describedby="emailHelp" placeholder="Password" type="password" name="Confirm Password" onChange={this.handleChangeConfirmPass}/>
			<br/>
			<button onClick={this.handleClickRegister}>Sign Up</button>
			</form>
			</div>
		);
	}
}
export default Register;
