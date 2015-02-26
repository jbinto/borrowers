import Ember from 'ember';

export default Ember.Route.extend({
  deactivate: function() {
    console.log('friend.edit route deactivated');
    var model = this.modelFor('friends/edit');
    model.rollback();
  }
});
