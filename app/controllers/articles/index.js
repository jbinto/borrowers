import Ember from 'ember';

export default Ember.Controller.extend({
  possibleStates: ['borrowed', 'returned'],

  contentDidChange: function() {
    console.log('The article collection was changed.');
  }.observes('model.[]'),
  stateDidChange: function() {
    console.log('One of the articles states was changed.');
  }.observes('model.@each.state')
});