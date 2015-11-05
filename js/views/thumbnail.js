import React from 'react';

export default React.createClass({

  homeHandler() {
    this.props.onHomeClick();
  },


  // addHandler() {
  // 	this.props.onAddClick("add");
  // },

  editHandler(id) {
    this.props.onEditClick(id);
  },

	clickHandler(event) {
		this.props.onSelectClick(this.props.id);
	},

	render(){
		console.log(this);
		return(
			<div>
				<div className="pics" onClick={this.clickHandler}>
					<img className="sumo" src={this.props.artist.Image.url}/>
				</div>
				<div className="about">
					<ul className="doit">
						<li><b>Artist</b>: {this.props.artist.Name}</li><br></br>
						<li><b>Description</b>: {this.props.artist.Description}</li>
					</ul>
					<div className="buttons">
						<button className="chip" onClick={this.homeHandler}>Home</button>
						<button className="chip" onClick={this.editHandler}>Edit</button>
					</div>
				</div>
			</div>
		);
	}

});