import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['showReturned'],
  showReturned: false,
  possibleStates: ['borrowed', 'returned'],

  filteredResults: function() {
    console.log('filteredResults called');
    var model = this.get('model');
    var showReturned = this.get('showReturned');
    if (showReturned) { 
      return model; 
    }
    else {
      return model.filterBy('state', 'borrowed');  
    }
  }.property('model.@each.state', 'showReturned'),

  contentDidChange: function() {
    console.log('The article collection was changed.');
  }.observes('model.[]'),

  stateDidChange: function() {
    console.log('One of the articles states was changed.');
  }.observes('model.@each.state')
});