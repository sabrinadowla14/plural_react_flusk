/*eslint-disable strict */ //Disabling check because we can't run strict mode. Need global vars.
var React = require('react');
var Header = require('./share/header');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({
  render: function () {
    //keep tarck which child we are going to render
    //this route handler will end up rendering the appropriate child component based on the Url react router will take care of all that for us.
    
    return (
      <div>
        <Header />
        <div className="container-fluid">
        <RouteHandler />
        </div>
        
      </div>
    );
  }
});

module.exports = App;
