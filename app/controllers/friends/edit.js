import FriendsBaseController from './base';

export default FriendsBaseController.extend({
  actions: {
    cancel: function() {
      // n.b. from within a route, this would be simply `transitionTo`
      this.transitionToRoute('friends.show', this.get('model'));
      return false;
    }
  }
});
