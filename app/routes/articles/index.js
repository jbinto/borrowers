import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var articles = this.modelFor('friends/show').get('articles');

    // Articles is an async relationship. This means Ember Data will
    // never actually update the Article Index once it's been loaded once.
    //
    //   (Recall, the Friends Index model hook fires on every activation.
    //    When we were using sideloading, this took care of the articles also.)
    // 
    // We need some way of figuring out whether or not the Article Index needs
    // to be reloaded from API. (jb)

    // From book:

    // Async relationships return a PromiseArray.
    // The `isFulfilled` property will be true when the proxied promise has 
    // already been fulfilled. In this case, we'll force a reload.

    // XXX: This is very flaky. It doesn't seem to work as expected at all.
    // For instance, adding then cancelling doesn't cause a reload.
    // Also, going back and forward only reloads the model on every other try.
    // See https://github.com/abuiles/ember-cli-101-errata/issues/148

    console.log('article.index model hook called');
    console.log('--> isFulfilled: ' + articles.get('isFulfilled'));
    if (articles.get('isFulfilled')) {
      console.log('---> reloading articles from api..');
      articles.reload();
    }

    return articles;
  },

  actions: {
    save: function(article) {
      console.log("article.index route save called");
      article.save();
      return false;
    }
  }
});
