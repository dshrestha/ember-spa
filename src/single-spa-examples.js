import {declareChildApplication, start} from 'single-spa';
import {loadEmberApp} from 'single-spa-ember';
import 'babel-polyfill';

declareChildApplication('navbar', () => import('./navbar/navbar.app.js'), () => true);
declareChildApplication('home', () => import('./home/home.app.js'), () => location.pathname === "" || location.pathname === "/");
declareChildApplication('ember-1', () => loadEmberApp("ember-1", '/build/ember-1/assets/ember-1.js', '/build/ember-1/assets/vendor.js'), pathPrefix('/ember-1'));
declareChildApplication('ember-2', () => loadEmberApp("ember-2", '/build/ember-2/assets/ember-2.js', '/build/ember-2/assets/vendor.js'), pathPrefix('/ember-2'));
declareChildApplication('ember-3', () => loadEmberApp("ember-3", '/build/ember-3/assets/ember-3.js', '/build/ember-3/assets/vendor.js'), pathPrefix('/ember-3'));
declareChildApplication('ember-4', () => loadEmberApp("ember-4", '/build/ember-4/assets/ember-4.js', '/build/ember-4/assets/vendor.js'), pathPrefix('/ember-4'));

start();

function pathPrefix(prefix) {
    return function(location) {
        return location.pathname.indexOf(`${prefix}`) === 0;
    }
}
