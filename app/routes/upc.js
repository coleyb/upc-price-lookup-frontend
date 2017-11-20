import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.peekAll('upc');
  },
  actions: {
    reload: function() {
      this.controller.get('model').forEach(function(record){
         record.reload();
      });
    }
  }
});
