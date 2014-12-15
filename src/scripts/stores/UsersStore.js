'use strict';

var Store = require('../lib/Store');
var UsersConstants = require('../constants/UsersConstants');

var user = null;

var users = [];

var UsersStore = new Store({
  users: function() {
    return ChatApi.getUsers().list()
  },
  user: function() {
    return user
  },
});

UsersStore.registerHandler(UsersConstants.CREATE_SUCCESS, function(payload) {
  user = payload;
  this.emitChange();
});

module.exports = UsersStore;
