var React = require('react');

var Page1 = React.createClass({
  render : function(){
    return(
      <div>
        <h1>Page1</h1>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Page1;
