import FriendsBaseController from './base';

export default FriendsBaseController.extend({
  queryParams: ['sortAscending', 'sortBy'],
  sortAscending: true,
  sortBy: 'firstName',
  actions: {
    setSortBy: function(fieldName) {
      this.set('sortBy', fieldName);
      this.toggleProperty('sortAscending');

      console.log('sorting by: ' + fieldName);
      console.log('sorting asc: ' + this.get('sortAscending'));

      return false;
    }
  }
});
