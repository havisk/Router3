import React from 'react';
import Thumbnail from './thumbnail';

export default React.createClass({

	selectHandler(id) {
		this.props.onThumbnailSelect(id);
	},

	getThumb(image) {
		return (
			<Thumbnail src={image.Image} id={image.objectId} onSelect={this.selectHandler}/>

			);
	},

	render(){
		return(
			<div className="container">
			<div className='artist-list'>
				{this.props.data.map(this.getThumb)}
			</div>
				<button onClick={this.addClickHandler}>Add</button>
			</div>
			);
	}
});

