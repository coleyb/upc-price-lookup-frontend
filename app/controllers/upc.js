import Ember from 'ember';

export default Ember.Controller.extend({
  isLoading: false,
  actions: {
    lookupUpc: function() {
      var upc_id = this.get('upc_id');
      this.toggleProperty('isLoading');
      this.store.findRecord('upc', upc_id).then(result => {
        this.store.pushPayload('upc', result);
        this.toggleProperty('isLoading');
        this.send('reload');
        this.set('upc_id', '');
        Ember.$('.upcInput').focus();
      }).catch(() => {
        this.toggleProperty('isLoading');
        alert('UPC not found');
      });
    }
  }
});
