var React = require('react');
var CreateReactClass = require('create-react-class');


var FooterComponent = CreateReactClass({
  render: function() {
    return(
      <div>
        <h3 className="head"><a className="black" href="#">MOVIES.</a></h3>
        <h5 className="head">&copy; Movie Website, LLC.</h5>
        <ul className="footer-inline">
          <li><a href="#" className="black">Account</a></li>
          <li><a href="#" className="black">Help Center</a></li>
          <li><a href="#" className="black">Terms</a></li>
          <li><a href="#" className="black">Privacy</a></li>
        </ul>
      </div>
    )
  }
})

module.exports = FooterComponent;
