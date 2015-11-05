import React from 'react';
import ReactDom from 'react-dom'

export default React.createClass({

 addHandler() {
  	this.props.onAddClick("add");
  },

	selectHandler(id) {
		this.props.onThumbnailSelect(id);
	},

	getThumb(artist) {
		return (
			<div key={artist.objectId} className="pic"  onClick={() => this.selectHandler(artist.objectId)}>
				<ul className="move">
					<li className="peeps"><img src={artist.Image.url} className="ret"/></li>
				</ul>
				</div>
		);
	},

	render(){
		return(
			<div className="container">
			<h1>Artists: The Good & The Why Are You Making Music!!</h1>
				<div className='artist-list'>
					{this.props.data.map(this.getThumb)}
				</div>
				<button className="butt" onClick={this.addHandler}>Add</button>
			</div>
			);
	}
});
