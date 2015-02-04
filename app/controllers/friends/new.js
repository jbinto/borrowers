import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      console.log('+- save called from friends new controller');
      return true;
    },
    cancel: function() {
      console.log('+- cancel called from friends new controller');
      return true;
    }
  }
});
