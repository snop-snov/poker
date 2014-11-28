/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;

var LoginPage = React.createClass({
  render: function() {
    return (
      <div className='main'>
        Login page
        <Link to="room">Go to room</Link>
      </div>
    );
  }
});

module.exports = LoginPage;
