import Backbone from 'backbone';
import $ from 'jquery';
import React from 'react';
import ReactDom from 'react-dom';

import ArtistCollection from './artist_collection';

import ThumbnailList from './views/thumbnail_list';
import PreviewArtist from './views/thumbnail';
import Add from './views/add';
// import Details from './views/description';
import Edit from './views/edit';






let Router = Backbone.Router.extend({

	routes: {
		""  : "home",
		"images/:id"  : "showImage",
		"add"  :  "showAdd",
		"edit" :  "showEdit"

},
	initialize: function(appElement) {

		this.el = appElement;

		this.artist = new ArtistCollection();

		let router = this;
	},

		goto(route) {
			this.navigate(route, {
				trigger: true
			});
		},

		render(component) {
			ReactDom.render(component, this.el);
		},

		home() {

			this.artist.fetch().then(() =>{
				this.render(
					<ThumbnailList
						onThumbnailSelect={this.selectImage.bind(this)}
						data={this.artist.toJSON()}
						onAddClick={() => this.goto('add')}/>
						
					);
			});
		},

			selectImage(id) {
				let image = this.artist.toJSON().find(item => item.objectId === id);
				this.navigate('images/' + id, {trigger: true});

				this.render(
					<PreviewArtist
					onHomeClick={() => this.goto("")}
					onEditClick={() => this.goto("edit")}
					src={image.photoURL}
					imageTitle={image.title}
					imageDescription={image.description}/>

					)
			},

			showImage(id) {

				let image = this.photos.toJSON().find(item => item.objectId === id);

				ReactDom.render(<PreviewArtist src ={image.image}/>, this.el);

			},

			showAdd() {
				this.render(
					<AddComponent
					onHomeClick={() => this.goto('')}
					onSubmitClick={() => this.goto('')}/>

					);

			$('submit').click(function() {
				var newArtist = new ArtistModel ({
					Name: $('#artist').val(),
					Description: $('#description').val(),
					Image: $('#photoURL').val(),
				});
				newArtist.save();
			});
		},

ShowEdit() {
	this.render(
		<EditComponent
		onHomeClick={() => this.goto("")}
		onDetailsClick={() => this.goto('details')}
    onAddClick={() => this.goto('add')}
    onEditClick={() => this.goto('edit')}/>

		);
},



start: function() {
	Backbone.history.start();
}
});


export default Router;


