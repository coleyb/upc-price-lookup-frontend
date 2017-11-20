import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('upc');
  this.route('upcs', { path: '/upcs/:upc_id' });
});

export default Router;
