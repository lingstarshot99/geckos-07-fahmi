var React = require('react');
var CreateReactClass = require('create-react-class');

var PosterComponent = CreateReactClass({
  render: function(){
    return(
      <div className="poster">
        <div className="s60">
          <h1 id="tagline">Stream Any Movie at Anytime with No Individual Movie Costs or Rental Fees.</h1>
        </div>
          <div className="btnGroup">
            <a href="#" className="btnwhite"><span className="green">TRY IT FREE</span></a>
          </div>
          <p>Thousands of movies <b>with no rental fees.</b> Our <br /> monthly plan gives you unlimited access to our <br /> movie library</p>
          <p><b>Forget the theaters!</b> Exclusive access to <br /> movies in theaters on release date.</p>
          <img id="ipad"src={require("./iPadPro97White.png")} alt="ipad" />
      </div>
    )
  }
})

module.exports = PosterComponent;
