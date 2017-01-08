import Ember from 'ember';

export default Ember.Route.extend({
  // model() is shorthand method definition
  // same as writing model: function()
  model() {
    return this.get('store').findAll('rental');
  }
});
