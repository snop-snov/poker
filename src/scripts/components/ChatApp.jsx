/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var MessagesList = require('./MessagesList')
var UsersList = require('./UsersList')
var SendForm = require('./SendForm')

var ChatApp = React.createClass({
  getInitialState: function() {
    return {
      messages: [{
        user: "User",
        message: "Hello",
        time: "14:02"
      },
      {
        user: "User2",
        message: "Hello 2",
        time: "14:10"
      }],

      user: {
        name: "SuperUser"
      },

      users: [{
        name: 'User 2'
      }, {
        name: 'User 3'
      }]

    }
  },

  render: function() {
    return (
      <div className='main'>
        <MessagesList/>
        <UsersList/>
        <SendForm/>
      </div>
    );
  }
});

module.exports = ChatApp;
