import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import singleSpaEmber from 'single-spa-ember';
//import Ember from "ember";

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;

// Single-spa configuration and lifecycles
const emberLifecycles = singleSpaEmber({
  App,
  appName: 'ember-3',
  createOpts: {
    rootElement: '#ember-3'
  }
});

// Single-spa lifecycles.
export const bootstrap = emberLifecycles.bootstrap;
export const mount = emberLifecycles.mount;
export const unmount = (()=>{
  return emberLifecycles.unmount().then(()=>{
    //delete Ember.Inflector;
  });
});
