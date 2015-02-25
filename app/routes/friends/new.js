import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('friend');
  },

  deactivate: function() { 
    // When we transition out of this route, make sure to clean up unsaved records.

    // We can't just refer to model here: that's not directly available in the route.
    var model = this.modelFor('friends/new');
    if (model.get('isNew')) {
      model.destroyRecord();
    }
  },

  actions: {
    save: function() {
      console.log('+-- save bubbled up to friends/new route');
      return true;
    },
    cancel: function() {
      console.log('+-- cancel bubbled up to friends/new route');
      return true;
    }
  }
});
