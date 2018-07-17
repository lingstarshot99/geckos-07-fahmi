var React = require('react');
var CreateReactClass = require('create-react-class');

var SubscriptionComponent = CreateReactClass({
  render: function() {
    return(
      <div className="content">
        <div className="center">
          <h1>Watch Your Favorite Movies and Explore <br /> Similar Titles. Get Started Today for <br /><span className="green"> $5.99</span> /month.</h1>
          <button id="btn-start">GET STARTED</button>
        </div>
      </div>
    )
  }
})

module.exports = SubscriptionComponent;
