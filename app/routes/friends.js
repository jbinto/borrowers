import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function() {
      console.log('+--- save bubbled up to friends route');
      return true;
    },
    cancel: function() {
      console.log('+--- cancel bubbled up to friends route');
      return false;
    },
    delete: function(friend) {
      var self = this;
      friend.destroyRecord().then(function() {
        self.transitionTo('friends.index');
      });
    }
  }
});