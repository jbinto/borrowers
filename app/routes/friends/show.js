import Ember from 'ember';

export default Ember.Route.extend({
  // The following model hook is implicitly added by Ember:
  //
  // model: function(params) {
  //   return this.store.find('friend', params.friend_id);
  // }
  //
  // The convention here is "this is the default model hook when my
  //  route has a dynamic segment ending in _id".
  //
  // Nitty gritty details here:
  // https://github.com/emberjs/ember.js/blob/f90ae24e633ab0567a1ba4ea9184f7a420921f03/packages/ember-routing/lib/system/route.js#L1241
});