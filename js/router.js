import Backbone from 'backbone';
import $ from 'jquery';
import React from 'react';
import ReactDom from 'react-dom';

import ArtistCollection from './artist_collection';
import ArtistModel from './artist_model';
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
		"edit/:id" :  "showEdit"

},
	initialize: function(appElement) {

		this.el = appElement;
		this.artist = new ArtistCollection();
		this.model = new ArtistModel();
		// let router = this;
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
				let artist= this.artist.toJSON().find(item => item.objectId === id);
				this.navigate('images/' + id, {trigger: true});

				this.render(
					<PreviewArtist
					onHomeClick={() => this.goto("")}
					onEditClick={() => this.goto("edit/" + id)}
					// imageName={artist.Name}
					// imageDescription={artist.Description}
					artist={artist}/>

					)
			},

			showImage(id) {

				this.artist.fetch().then( () =>  {
					let singleArtist = this.artist.get(id);
					// if(singleArtist){
					// 	return Pomise.resolve(singleArtist)
					// }else{
					// 	singleArtist= this.artist.
					// }
					console.log(singleArtist);
					ReactDom.render(<PreviewArtist 
						onHomeClick={() => this.goto("")}
						onEditClick={() => this.goto("edit/" + id)} 
						artist={singleArtist.toJSON()}/>, this.el);
				});



			},

			showAdd() {
				this.render(
					<Add
					onCancelClick={() => this.goto('')}
					onUploadSelect={(Name, Image, Description) => {

						let newArtist = new ArtistModel ({
							Name: Name,
							Image: Image,
							Description: Description
						});

						newArtist.save().then(() => {
							this.goto("");
						});
					}
				}/>	
			);
		},

showEdit(objectId) {
	let sing = this.artist.get(objectId);

		this.render(
			<Edit
			data={sing.toJSON()}
			onCancelClick={() => this.goto("")}
	    onSubmit={(Name, Image,  Description) => 
	    	this.saveForm(Name, Image, Description, objectId)}/>

		);

},

saveForm(Name, Image, Description, objectId){
	this.artist.get(objectId).save({
		Name: Name,
		Image: Image,
		Description: Description
	}).then(() => {
		this.goto("");
	});
},



start: function() {
	Backbone.history.start();
}
});


export default Router;


