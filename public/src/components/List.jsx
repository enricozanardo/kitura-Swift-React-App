var React = require('React');
var ListItem = require('./ListItem.jsx');
var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var UserStore = require('../reflux/users-store.jsx');

var List = React.createClass({
  mixins:[Reflux.listenTo(UserStore, 'onChange')],
  getInitialState: function (){
      return {users:[]}
  },
  componentWillMount: function (){
    Actions.getUsers();
  },
  //parameters are taken from the function on users-store this.trigger('change', this.users);
  onChange: function (event, updateUsers){
    this.setState({users: updateUsers});
  },
  render : function() {
    var listItems = this.state.users.map(function(item) {
      return <ListItem key={item.id} user={item.fistName} />;
    });

    return (
        <ul>{listItems}</ul>
    );
  }
});

module.exports = List;
