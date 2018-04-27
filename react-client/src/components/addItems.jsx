import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';
//import { RadioGroup, RadioButton } from 'react-radio-buttons';
//import ImageUploader from 'react-image-upload';

// npm install react-radio-buttons --save
// npm install --save react-image-upload

class AddItems extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			nickname:'',
			itemname: '',
			itemDescription: '',
			PriceOpt: '',
			pictures: [],
			address: '',
			phoneNum: '',
			checkedPrice: false,
			itemPrice: ''
		}

		this.handleChangeRadio = this.handleChangeRadio.bind(this);
		this.handleitemnameChange = this.handleitemnameChange.bind(this);
		this.handleItemDescriptionChange = this.handleItemDescriptionChange.bind(this);
		this.handleItemImageChange = this.handleItemImageChange.bind(this);
		this.handleLocationChange = this.handleLocationChange.bind(this);
		this.handlePhoneNumChange = this.handlePhoneNumChange.bind(this);
		this.handlePriceChange = this.handlePriceChange.bind(this);
		this.handleClickSubmitLendDetails = this.handleClickSubmitLendDetails.bind(this);

	}

	handleChangeRadio(event) {
		this.setState({
			PriceOpt: event.target.value });

		if(this.state.PriceOpt === "chargeable"){  
			this.state.checkedPrice = true;
		}
	}

	handleNickNameChange (evt) {
		this.setState({ nickName: evt.target.value });
	}

	handleitemNameChange (evt) {
		this.setState({ itemname: evt.target.value });
	}

	handleItemDescriptionChange (evt) {
		this.setState({ itemDescription: evt.target.value });
	}

	handleItemImageChange(picture) {
		this.setState({
		 pictures: this.state.pictures.concat(picture),
		});
	}

	handleLocationChange (evt) {
		this.setState({ address: evt.target.value });
	}

	handlePhoneNumChange (evt) {
		this.setState({ phoneNum: evt.target.value });
	}

	handlePriceChange (evt) {
		this.setState({ itemPrice: evt.target.value });
	}

	handleClickSubmitLendDetails(){
		console.log('Submit item details!');
		$.ajax({
			type:'POST',
			url:'/lend',
			data:{
				itemname: this.state.itemname,
				itemDescription: this.state.itemDescription,
				PriceOpt: this.state.PriceOpt,
				pictures: this.state.pictures,
				address: this.state.address,
				phoneNum: this.state.phoneNum,
				itemPrice: this.state.itemPrice
			},
			success: (data) => {
				console.log("Success in submiting item details!", data);	
				$("#successLendItemDetailsUpload").show();
			},
			error: (req, status, err) => {
				console.log("Error in in submiting item details!", err);
				$("#errorLendItemDetailsUpload").show();
			}
		})
	}

	render(){

		return (
			
			<div>
			<h1>Add Items</h1>
			<form>
			<label>Nickname:</label>
			<input type="text" name="NickName" onChange={this.handleNickNameChange}/>
			<br/>
			<label>Item name:</label>
			<br/>
			<input type="text" name="Item Name" onChange={this.handleitemNameChange}/>
			<br/>
			<label>Item description:</label>
			<br/>
			<textarea rows="4" cols="50" onChange={this.handleItemDescriptionChange}/>
			<br/>
			<label>Item images:</label>
			<br/>
			<ImageUploader
			withIcon={true}
			buttonText='Choose images'
			onChange={this.onDrop}
			imgExtension={['.jpg', '.gif', '.png', '.gif']}
			maxFileSize={5242880}
			/>
			<br/>
			<label>Your location:</label>
			<br/>
			<input type="text" name="Location" onChange={this.handleLocationChange}/>
			<br/>
			<label>Your phone number:</label>
			<br/>
			<input type="text" name="Phone Number" onChange={this.handlePhoneNumChange}/>
			<br/>
			<label>Price Type:</label>
			<br/>
			<label>Please insert the item price:</label>
            <input type="text" name="Item Price" onChange={this.handlePriceChange}/>			
            </form>
			<br/>
			<button onclick="handleClickSubmitLendDetails()">Upload</button>
			</div>
			);
	}

}

export default AddItems;