import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('article', {
      friend: this.modelFor('friends/show')
    });
  },
  deactivate: function() {
    var model = this.modelFor('articles/new');
    model.destroyRecord();
  },
  actions: {
    save: function() {
      var article = this.modelFor('articles/new');
      article.save().then(() => {
        this.transitionTo('articles');
      });
    },
    cancel: function() {
      this.transitionTo('articles');
    }
  }
});