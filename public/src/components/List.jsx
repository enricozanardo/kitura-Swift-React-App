var React = require('React');
var ListItem = require('./ListItem.jsx');
var HTTP = require('../services/httpservice');

var List = React.createClass({
  getInitialState: function (){
      return {users:[]}
  },
  componentWillMount: function (){
    HTTP.get('/users')
    .then(function(data){
      this.setState({users: data});
    }.bind(this));
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
