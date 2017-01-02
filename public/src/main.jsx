var React = require('react');
var ReactDOM = require('react-dom')
//local components
var Routes = require('./Routes.jsx');
var NavBar = require('./components/nav/NavBar.jsx');

var navLinks = [
  {
    "title":"Home",
    "href":"#"
  },
  {
    "title":"Courses",
    "href":"#Page1"
  },
  {
    "title":"Blog",
    "href":"#Page2"
  },
]

ReactDOM.render(<Routes />, document.getElementById('main'));
ReactDOM.render(<NavBar navData={navLinks} bgColor="#FFF" titleColor="#009ee3" />, document.getElementById('nav'));
