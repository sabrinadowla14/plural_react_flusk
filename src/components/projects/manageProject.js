"use strict";

var React = require('react');
var Router = require('react-router');
var ProjectForm = require('./projectForm');
var ProjectApi = require('../../api/projectApi');
var toastr = require('toastr');

var ManageProject = React.createClass({
  mixins: [
    Router.Navigation
  ],

  statics: {
		willTransitionFrom: function(transition, component) {
			if (component.state.dirty && !confirm('Leave without saving?')) {
				transition.abort();
			}
		}
	},

  getInitialState: function () {
    return {
      project: { id: '', name1: '', name2: '' },
      errors: {},
      dirty: false
    };
  },

  componentWillMount: function() {
		var projectId = this.props.params.id; //from the path '/project:id'
		if (projectId) {
			this.setState({project: ProjectApi.getProjectById(projectId) });
		}
	},
  setProjectState: function (event) {
    this.setState({dirty: true});
    var field = event.target.name;
    var value = event.target.value;
    this.state.project[field] = value;
    return this.setState({ project: this.state.project });
  },
  projectFormIsValid: function() {
		var formIsValid = true;
		this.state.errors = {}; //clear any previous errors.

		if (this.state.project.name1.length < 3) {
			this.state.errors.name1 = 'Project tools must be at least 3 characters.';
			formIsValid = false;
		}

		if (this.state.project.name2.length < 3) {
			this.state.errors.name2 = 'Project language must be at least 3 characters.';
			formIsValid = false;
		}

		this.setState({errors: this.state.errors});
		return formIsValid;
	},
  


  //passing event from child component to here
  saveProject: function (event) {
    //we don't want the default browser event to happen here
    event.preventDefault();
    if (!this.projectFormIsValid()) {
			return;
		}
    ProjectApi.saveProject(this.state.project);
    this.setState({dirty: false});
    toastr.success('Project saved.');
    this.transitionTo('projects');
  },

  render: function () {
    return (
      //Add a reference to projectForm
      <ProjectForm project={this.state.project}
        onChange={this.setProjectState}
        onSave={this.saveProject}
        errors={this.state.errors}
         
         />
    );
  }

});
module.exports = ManageProject;