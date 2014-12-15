/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var MessagesList = require('./MessagesList')
var UsersList = require('./UsersList')
var SendForm = require('./SendForm')
var Fluxable = require('../behaviors/Fluxable');
var MessagesActions = require('../actions/MessagesActions');
var UsersActions = require('../actions/UsersActions');
var MessagesStore = require('../stores/MessagesStore');
var UsersStore = require('../stores/UsersStore');

var ChatApp = React.createClass({
  mixins: [Fluxable],
  watchStores: [MessagesStore, UsersStore],

  getStateFromStores: function(){
    return {
      messages: MessagesStore.messages(),
      users: UsersStore.users(),
      user: UsersStore.user(),
    }
  },

  didMount: function() {
    setInterval(function(){
      ChatApi.activeUser(this.state.user);
      console.log("interval!!!");
    }.bind(this), 1000);

    ChatApi.onMessagesChange(function(){
      this.setState(this.getStateFromStores())
    }.bind(this));

    UsersActions.createUser('SuperUser');
  },

  addMessage: function(user, text) {
    MessagesActions.add(user, text);
  },

  render: function() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-8'>
            <MessagesList messages={this.state.messages}/>
          </div>
          <div className="col-xs-4">
            <UsersList user={this.state.user} users={this.state.users} />
          </div>
        </div>
        <hr/>
        <div className='row'>
          <div className='col-xs-12'>
            <SendForm user={this.state.user} onSubmit={this.addMessage} />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ChatApp;
