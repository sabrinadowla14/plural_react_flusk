"use strict";

var React = require('react');

var About = React.createClass({
	render: function () {
		return (
			<div>
				<h1>About</h1>
				<p>
					In this website I have following information:
					<ul>
						<li>Resume</li>
						<li>Coverletter</li>
						<li>Blogs</li>
						
					</ul>
				</p>
			</div>
		); 
	}
});

module.exports = About;