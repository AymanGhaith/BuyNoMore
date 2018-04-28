import MapContainer from './Gmaps.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class ItemsList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			galleryItems: [{nickname: "Zolfaa", itemName: "Drill1", phoneNum:"123" }, {nickname: "Mais", itemName: "Drill2", phoneNum:"987"}, {nickname:"Ali", itemName: "Drill3", phoneNum:"9876"}]
		}

	}
render(){

	return (
	<div>
		<h1>Home Page!</h1>

		<div>

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

export default ItemsList;
