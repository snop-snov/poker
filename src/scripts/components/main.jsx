/** @jsx React.DOM */

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

var React = require('react');
var ChatApp = require('./ChatApp');
var {DefaultRoute, Route, Routes} = require('react-router');

React.renderComponent((
  <Routes location="history">
    <Route path="/" handler={ChatApp}></Route>
  </Routes>
), document.getElementById('content'));
