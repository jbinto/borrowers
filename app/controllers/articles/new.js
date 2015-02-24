import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.description',
    function() {
      return Ember.isPresent(this.get('model.description'));
    }
  ),
  actions: {
    save: function() { 
      if (this.get('isValid')) {
        return true;
      }
      else {
        this.set('errorMessage', "Please enter a description.");
        return false;
      }
    }
  }
});