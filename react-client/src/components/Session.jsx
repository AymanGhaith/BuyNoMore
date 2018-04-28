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

			galleryItemsLend: [{nickname: "Zolfaa", itemName: "Drill1", phoneNum:"123" }, {nickname: "Mais", itemName: "Drill2", phoneNum:"987"}, {nickname:"Ali", itemName: "Drill3", phoneNum:"9876"}],
		    galleryItemsBorrow: [{nickname: "Zolfaa1", itemName: "Drill11", phoneNum:"1231" }, {nickname: "Mais1", itemName: "Drill21", phoneNum:"9871"}, {nickname:"Ali1", itemName: "Drill31", phoneNum:"98761"}]

		}
		// this.handleClickRegister = this.handleClickRegister.bind(this);
		this.handleClickLogOut = this.handleClickLogOut.bind(this);
	}

	handleClickLogOut(){
	 console.log("logout button")
	 window.location.href = '/login';
	}

	// componentDidMount() {
	// }

	render(){
		return (
			<div>

			  <p>Hello Logged In user!</p>

			  <div> 
			    <a href="/addItems">Add Items</a>
			   <button onClick={this.handleClickLogOut}>Log Out</button>

			  </div>

			 <div className="container">
			  <div className="row">


			   {this.state.galleryItemsLend.map(item =>

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

            <div className="container">
			  <div className="row">


			   {this.state.galleryItemsBorrow.map(item =>

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
			);
	}
}

export default Home;

