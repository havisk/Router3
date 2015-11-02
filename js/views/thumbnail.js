import React from 'react';

export default React.createClass({

	clickHandler(event) {
		this.props.onSelect(this.props.id);
	},

	render(){
		return(
			<div>
				<div className="buttons">
					<button onClick={this.homeClickHandler}>Home</button>
					<button onClick={this.editClickHandler}>Edit</button>
				</div>
				
				<div className="pics" onClick={this.clickHandler}>
					<img src={this.prop.src}/>
				</div>
				<div className="about">
					<ul>
						<li><b>Artist</b>: {this.props.imageName}</li>
						<li><b>Description</b>: {this.props.imageDescription}</li>
					</ul>
				</div>
			</div>
		);
	}

});