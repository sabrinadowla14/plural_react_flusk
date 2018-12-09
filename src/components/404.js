"use strict";

var React = require('react');
var Link = require('react-router').Link;

var page404 = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Page Not Found</h1>
				<p>Something is wrong!!.</p>
				<p><Link to="app">Go to Home</Link></p>
			</div>
		);
	}
});

module.exports = page404;