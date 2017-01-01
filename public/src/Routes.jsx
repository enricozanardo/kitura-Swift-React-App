var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;
var Base = require('./components/Base.jsx');
var Page1 = require('./components/Page1.jsx');
var Page2 = require('./components/Page2.jsx');

var Routes = React.createClass({
  render: function(){
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Base}>
          <Route path="/Page1" component={Page1} />
          <Route path="/Page2" component={Page2} />
        </Route>
      </Router>
    )
  }
});

module.exports = Routes;
