import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import singleSpaEmber from 'single-spa-ember/src/single-spa-ember';
import $ from 'jquery';

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
  appName: 'ember-4',
  createOpts: {
    rootElement: '#ember-4'
  }
});

// Single-spa lifecycles.
export const bootstrap = emberLifecycles.bootstrap;
export const mount = emberLifecycles.mount;
export const unmount = (() => {

  let appName = 'ember-4';
  let scriptsToRemove = ['/build/' + appName + '/assets/vendor.js', '/build/' + appName + '/assets/' + appName + '.js'];

  $('script').each(function (index, script) {
    if (scriptsToRemove.indexOf($(script).attr("src")) !== -1) {
      $(script).remove();
    }
  });

  return emberLifecycles.unmount().then(() => {

  });
});
