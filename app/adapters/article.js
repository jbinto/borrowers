import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  buildURL: function(type, id , record) {
    console.log("buildURL(type,id,record) called: " + type + " " + id + " " + record);
    return '/friends/' + record.get('friend.id') + '/articles/' + id;
  }
});