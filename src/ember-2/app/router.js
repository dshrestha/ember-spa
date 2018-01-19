import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: 'history',
  rootURL: config.rootURL
});

Router.map(function() {

});

export default Router;
