import Backbone from 'backbone';

let Artistmodel = Backbone.Mdel.extend({
	urlRoot: 'https://www.parse.com/apps/artist--5/collections#class/Top_Artists',
	idAttribute: 'objectId'

});

export default Artistmodel;