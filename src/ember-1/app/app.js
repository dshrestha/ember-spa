import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import singleSpaEmber from 'single-spa-ember/src/single-spa-ember';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;


// Single-spa configuration and lifecycles
const emberLifecycles = singleSpaEmber({
  App,
  appName: 'ember-1',
  createOpts: {
    rootElement: '#ember-1'
  }
});

// Single-spa lifecycles.
export const bootstrap = emberLifecycles.bootstrap;
export const mount = emberLifecycles.mount;
export const unmount = emberLifecycles.unmount;
