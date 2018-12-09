"use strict";

var React = require('react');
var ProjectApi = require('../../api/projectApi');
var ProjectList = require('./projectList');


var Projects = React.createClass({
	getInitialState: function() {
		return {
			projects: []
		};
  },
  componentDidMount: function() {
    if (this.isMounted()) {
			this.setState({ projects: ProjectApi.getAllProjects() });
    }
	},

	render: function() {
    
		return (
			<div>
        <h1>Projects</h1>
        <ProjectList projects={this.state.projects} />
       </div>
		);
	}
});

module.exports = Projects;