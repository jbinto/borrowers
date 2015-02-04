import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('friend');
  },

  actions: {
    save: function() {
      console.log('+--- save bubbled up to friends route');
      return true;
    },
    cancel: function() {
      console.log('+--- cancel bubbled up to friends route');
      return false;
    }
  }
});
