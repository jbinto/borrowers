import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    sortBy: { refreshModel: true },
    sortAscending: { refreshModel: true }
  },

  // This model hook is always called.
  // It is NOT dynamically generated, since it doesn't have an _id.
  // Again, see https://github.com/emberjs/ember.js/blob/f90ae24e633ab0567a1ba4ea9184f7a420921f03/packages/ember-routing/lib/system/route.js#L1241
  model: function(params) {
    return this.store.findQuery('friend', params);
  }
});