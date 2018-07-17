var React = require('react');
var CreateReactClass = require('create-react-class');

var MoviesComponent = CreateReactClass({
  render: function() {
    return(
      <div className="new-movies">
        <div className="new-movie-head">
          <h3 className="head">NEW 4K MOVIES</h3>
          <h5 className="head"><a className="green" href="#">VIEW MORE</a></h5>
        </div>
        <div className="new-movie-thumbnail">

            <img className="thumb" src={require("./css/pic/1.jpg")}/>
            <img className="thumb" src={require("./css/pic/2.jpg")}/>
            <img className="thumb" src={require("./css/pic/3.jpg")}/>
            <img className="thumb" src={require("./css/pic/4.jpg")}/>
            <img className="thumb" src={require("./css/pic/5.jpg")}/>
            <img className="thumb" src={require("./css/pic/6.jpg")}/>
            <img className="thumb" src={require("./css/pic/7.jpg")}/>
            <img className="thumb" src={require("./css/pic/8.jpg")}/>

        </div>
      </div>
    )
  }
})

module.exports = MoviesComponent;
