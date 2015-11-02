import Backbone from 'backbone';
import ArtistModel from './artist_model';

let ArtistCollection = Backbone.Collection.extend({
	url: 'https://www.parse.com/apps/artist--5/collections#class/Top_Artists',

	model: ArtistModel,

	parse: function(data){
		return data.results;
	}
});

export default ArtistCollection;