define([
  'jquery',
  'lodash',
  'backbone',
  'models/image'
], function($, _, Backbone, imageModel){
  var imagesCollection = Backbone.Collection.extend({
    model: imageModel,
    initialize: function(){

    }

  });

  return imagesCollection;
});
