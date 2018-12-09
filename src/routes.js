"use strict";


var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;


var routes = (
  <Route name="app" path="/" handler={require('./components/app')}>
    <DefaultRoute handler={require('./components/home')} />
    <Route name="projects" handler={require('./components/projects/project')} />
    <Route name="about" handler={require('./components/about/about')} />
    <NotFoundRoute handler={require('./components/404')} />
    <Redirect from="about-us" to="about" />
    <Redirect from="porjects" to="projects" />
    <Redirect from="about/*" to="about" />
  </Route>
);




module.exports = routes;