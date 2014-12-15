/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var _ = require('lodash');
var moment = require('moment');

var MessagesList = React.createClass({
  renderItems: function() {
    return _.map(this.props.messages, function(message) {
      var userName = message.user ? ChatApi.getUser(message.user).name : 'anonim';
      return <div className='main'>
        {moment(message.time).format('HH:mm')}
        &nbsp;
        <b>{userName}</b>
        &nbsp;
        {message.text}
      </div>
    })
  },
  render: function() {
    return <div>
      {this.renderItems()}
    </div>
  }
});

module.exports = MessagesList;
