import Backbone from 'backbone';
import ArtistModel from './artist_model';

let ArtistCollection = Backbone.Collection.extend({
	url: 'https://api.parse.com/1/classes/Top_Artists',

	model: ArtistModel,

	parse: function(data){
		return data.results;
	}
});

export default ArtistCollection;