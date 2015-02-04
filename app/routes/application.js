import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function() {
      console.log('+---- save bubbled up to application route');
      return true;
    },
    cancel: function() {
      // Won't execute: we return false in the friends route.
      console.log('+---- cancel bubbled up to application route');
      return true;
    }
  }
});
