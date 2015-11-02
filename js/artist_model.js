import Backbone from 'backbone';

let Artistmodel = Backbone.Model.extend({
	urlRoot: 'https://api.parse.com/1/classes/Top_Artists',
	idAttribute: 'objectId'

});

export default Artistmodel;