var React = require('react');
var ReactDOM = require('react-dom');
var CreateReactClass = require('create-react-class');

var TopNavComponent = require('./topNavComponent.js');
var PosterComponent = require('./posterComponent.js');
var MoviesComponent = require('./moviesComponent.js');
var SubscriptionComponent = require('./subscriptionComponent.js');
var FooterComponent = require('./FooterComponent.js');

require('./css/index.css');

var MainComponent = CreateReactClass({
  render: function() {
    return(
      <div>
      <div id="first">
        <div className="wrapper">
          <TopNavComponent />
          <PosterComponent />
        </div>
      </div>
      <div id="second">
        <div className="wrapper">
          <MoviesComponent />
        </div>
      </div>
      <div id="third">
        <div className="wrapper-extra">
          <SubscriptionComponent />
        </div>
      </div>
      <div id="footer">
        <div className="wrapper">
          <FooterComponent />
        </div>
      </div>
      </div>
    )
  }
})

ReactDOM.render(<MainComponent />, document.getElementById('main'));
