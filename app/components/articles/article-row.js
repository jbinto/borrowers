import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  article: null,          // passed in
  articleStates: null,    // passed in
  autoSave: function() {
    var article = this.get('article');
    if (!article.get('isNew')) {
      this.sendAction('save', article);
    }
  },
  stateChanged: function() {
    var article = this.get('article');
    if (article.get('isDirty') && !article.get('isSaving')) {
      // sort of like setTimeout(..., 0):
      //  "run this as soon as possible, but not sooner"
      Ember.run.once(this, this.autoSave);
    }
  }.on('init').observes('article.state')
});
