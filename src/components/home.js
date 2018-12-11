"use strict";
//import react in this file
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
//Create Home component
var Home = React.createClass({
  render: function() {
		return (
			<div className="jumbotron">
				<h1>Resume Website</h1>
				<p>React, React Router, and Flux are used to create this responsive website.</p>
				<Link to="about" className="btn btn-primary btn-lg">Want to know more</Link>
			</div>
		);
	}


});
module.exports = Home;