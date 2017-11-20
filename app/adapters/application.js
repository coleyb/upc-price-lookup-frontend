import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://upc-price-lookup.herokuapp.com'
});
