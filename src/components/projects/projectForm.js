"use strict";

var React = require('react');
var Input = require('../share/textInput');

var ProjectForm = React.createClass({
  propTypes: {
		project:	React.PropTypes.object.isRequired,
		onSave:	React.PropTypes.func.isRequired,
		onChange: React.PropTypes.func.isRequired,
		errors: React.PropTypes.object
	},
  render: function () {
    return (
      <form>
        <h1>Manage Project</h1>
        <Input
          name="id"
          label="Project Name"
          value={this.props.project.id}
          onChange={this.props.onChange}
          error={this.props.errors.id}

          
           />
        <Input
          name="name1"
          label="Project tools"
          value={this.props.project.name1}
          onChange={this.props.onChange}
          error={this.props.errors.name1}
          
           />

        <Input
          name="name2"
          label="Project Language"
          value={this.props.project.name2}
          onChange={this.props.onChange}
          error={this.props.errors.name2}
          
           />


        <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
      </form>


    );
  }

});
module.exports = ProjectForm;