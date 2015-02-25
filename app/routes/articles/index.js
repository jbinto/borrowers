import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('friends/show').get('articles');
  },
  actions: {
    save: function(article) {
      console.log("article.index route save called");
      article.save();
      return false;
    }
  }
});
