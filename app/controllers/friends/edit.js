import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.firstName',
    'model.lastName',
    'model.email',
    'model.twitter',
    function() {
      return Ember.isPresent(this.get('model.firstName')) &&
        Ember.isPresent(this.get('model.lastName')) &&
        Ember.isPresent(this.get('model.email')) &&
        Ember.isPresent(this.get('model.twitter'));
    }
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
      this.transitionToRoute('friends.show', this.get('model'));
      return false;
    }
  }
});
