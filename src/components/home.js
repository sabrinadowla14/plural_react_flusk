"use strict";
//import react in this file
var React = require('react');
//Create Home component
var Home = React.createClass({
  render: function() {
		return (
			<div className="jumbotron">
				<h1>Resume Website</h1>
				<p>React, React Router, and Flux are used to create this responsive website.</p>
				<Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
			</div>
		);
	}


});
module.exports = Home;