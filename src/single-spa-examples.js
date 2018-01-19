import {declareChildApplication, start} from 'single-spa';
import {loadEmberApp} from 'single-spa-ember';
import 'babel-polyfill';

declareChildApplication('navbar', () => import('./navbar/navbar.app.js'), () => true);
declareChildApplication('home', () => import('./home/home.app.js'), () => location.pathname === "" || location.pathname === "/");
declareChildApplication('ember-1', () => loadEmberApp("ember-1", '/build/ember-1/assets/ember-1.js', '/build/ember-1/assets/vendor.js'), pathPrefix('/ember-1'));
declareChildApplication('ember-3', () => loadEmberApp("ember-3", '/build/ember-3/assets/ember-3.js', '/build/ember-3/assets/vendor.js'), pathPrefix('/ember-3'));

start();

function pathPrefix(prefix) {
    return function(location) {
        return location.pathname.indexOf(`${prefix}`) === 0;
    }
}
