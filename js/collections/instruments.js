define([
  'jquery',
  'lodash',
  'backbone',
  'models/instrument'
], function($, _, Backbone, instrumentModel){
  var instrumentsCollection = Backbone.Collection.extend({
    model: instrumentModel,
    initialize: function(){

    }

  });

  return instrumentsCollection;
});
