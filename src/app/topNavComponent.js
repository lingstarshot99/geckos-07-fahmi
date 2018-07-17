var React = require('react');
var CreateReactClass = require('create-react-class');

var TopNavComponent = CreateReactClass({
  render: function() {
    return(
      <div id="top-nav">
        <h2 id="logo"><a href="#">MOVIES.</a></h2>
        <ul>
          <li><a href="#">Sign In / Log In</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Features</a></li>
        </ul>
      </div>
    )
  }
});

module.exports = TopNavComponent;
