import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import singleSpaEmber from 'single-spa-ember/src/single-spa-ember';

const App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;

// Single-spa configuration and lifecycles
const emberLifecycles = singleSpaEmber({
  App,
  appName: 'ember-2',
  createOpts: {
    rootElement: '#ember-2',
  },
})

// Single-spa lifecycles.
export const bootstrap = emberLifecycles.bootstrap;
export const mount = emberLifecycles.mount;
export const unmount = emberLifecycles.unmount;
