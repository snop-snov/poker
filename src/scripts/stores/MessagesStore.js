'use strict';

var _ = require('lodash');

var Store = require('../lib/Store');

var MessagesConstants = require('../constants/MessagesConstants');
var messages = [];

var MessagesStore = new Store({
  messages: function() {
    return ChatApi.getMessages().list()
  }
});

MessagesStore.registerHandler(MessagesConstants.ADD_SUCCESS, function(message) {
  messages.push(message);
  this.emitChange();
});

module.exports = MessagesStore;
