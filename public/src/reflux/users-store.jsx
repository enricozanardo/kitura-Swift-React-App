var HTTP = require('../services/httpservice');
var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var UserStore = Reflux.createStore({
  listenables: [Actions],
  getUsers : function() {
    HTTP.get('/users')
    .then(function(jsonData){
      this.users = jsonData;
      this.fireUpdate();
    }.bind(this));
  },
  postUser : function(data) {
    //Post user to the Server
    //now we got a successful callback
  },
  //Refresh function
  fireUpdate : function() {
    this.trigger('change', this.users);
  }
});


module.exports = UserStore;
