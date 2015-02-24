import Ember from 'ember';

export default Ember.Controller.extend({
  hasEmail: Ember.computed.notEmpty('model.email'),
  hasFirstName: Ember.computed.notEmpty('model.firstName'),
  hasLastName: Ember.computed.notEmpty('model.lastName'),
  hasTwitter: Ember.computed.notEmpty('model.twitter'),
  isValid: Ember.computed.and(
    'hasEmail',
    'hasFirstName',
    'hasLastName',
    'hasTwitter'
  ),
  actions: {
    save: function() {
      if (this.get('isValid')) {
        var self = this;
        this.get('model').save().then(function(friend) {
          self.transitionToRoute('friends.show', friend);
        });
      }
      else {
        this.set('errorMessage', 'Please complete the entire form.');
      }

      return false;
    },
    cancel: function() {
      // bubble up
      return true;
    }
  }
});