import Ember from 'ember';

export default Ember.Controller.extend({
  hasDescription: Ember.computed.notEmpty('description'),
  hasNotes: Ember.computed.notEmpty('hasNotes'),
  isValid: Ember.computed.and('hasDescription', 'hasNotes'),
  actions: {
    save: function() { 
      if (this.get('isValid')) {
        return true;
      }
      else {
        this.set('errorMessage', "Please fill all fields.");
        return false;
      }
    }
  }
});