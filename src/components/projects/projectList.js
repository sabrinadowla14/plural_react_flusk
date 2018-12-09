"use strict";
//don't need projectApi, since data is coming from the
//parents
var React = require('react');

var Router = require('react-router');
var Link = Router.Link;
var ProjectList = React.createClass({
  //this array is required
  // propTypes: {
  //   projects: React.propTypes.array.isRequired
  // },
	render: function() {
    var createProjectRow = function(project) {
    return (
      <tr key={project.id}>
      <td><a href={"/#projects/" + project.id}>{project.id}</a></td>
      <td>{project.name1}, {project.name2}</td>
      </tr>
       );
      };
		return (
			<div>
				
       <table className="table">
         <thead>
           <th>Name</th>
           <th>Tools and Languages</th>
         </thead>
         <tbody>
         {this.props.projects.map(createProjectRow, this)}
         </tbody>
         
       </table>
			</div>
		);
	}
});

module.exports = ProjectList;