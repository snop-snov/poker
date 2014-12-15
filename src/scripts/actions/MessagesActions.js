'use strict';

var _ = require('lodash');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var moment = require('moment')

var MessagesConstants = require('../constants/MessagesConstants');

function add(user, text) {
  ChatApi.createMessage(text, moment().unix(), user);
}

module.exports = {
  add: add
};
