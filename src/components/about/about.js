"use strict";

var React = require('react');

var About = React.createClass({
	statics: {
		willTransitionTo: function(transition, params, query, callback) {
			if (!confirm('Do you want to continue?')) {
				transition.about();
			} else {
				callback();
			}
		},
		willTransitionFrom: function(transition, component) {
			if (!confirm('Are you sure you want to leave?')) {
				transition.about();
			}
		}
	},
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