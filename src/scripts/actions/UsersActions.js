'use strict';

var _ = require('lodash');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var UsersConstants = require('../constants/UsersConstants');

function createUser(name) {
  var user = ChatApi.createUser(name);
  AppDispatcher.handleAction(UsersConstants.CREATE_SUCCESS, user);
  console.log(user);
};

module.exports = {
  createUser: createUser
};
