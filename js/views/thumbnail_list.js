import React from 'react';
import Thumbnail from './thumbnail';

export default React.createClass({

	selectHandler(id) {
		this.props.onThumbnailSelect(id);
	},

	getThumb(image) {
		return (
			<Thumbnail src={image,url} id={image.objectId} onSelect={this.selectHandler}/>

			);
	},

	render(){
		return(
			<div class='artist-list'>
				{this.props.data.map(this.getThumbt)}
			</div>
			);
	}
});

