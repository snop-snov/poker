/** @jsx React.DOM */

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

var React = require('react');
var LoginPage = require('./LoginPage');
var RoomPage = require('./RoomPage');
var {DefaultRoute, Route, Routes} = require('react-router');

React.renderComponent((
  <Routes location="history">
    <Route path="/" handler={LoginPage}></Route>
    <Route path="room" handler={RoomPage}></Route>
  </Routes>
), document.getElementById('content'));
