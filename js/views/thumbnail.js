import React from 'react';

export default React.createClass({

	clickHandler(event) {
		this.props.onSelect(this.props.id);
	},

	render(){
		return(
			<div className="pics" onClick={this.clickHandler}>
				<img src=(this.prop.src)/>
			</div>
		);
	}

});