/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var UsersList = React.createClass({
  renderItems: function() {
    return _.map(this.props.users, function(user) {
      return <div className='main'>
        {user.name}
      </div>
    })
  },
  render: function() {
    return <div>
      {this.renderItems()}
    </div>
  }
});

module.exports = UsersList;
