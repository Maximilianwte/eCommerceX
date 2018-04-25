import React, { Component } from "react";
import { TweenLite, TimelineLite, css } from "gsap";
import $ from "jquery";
import { Link } from "react-router-dom";
// DIE IDEE: BAUE MIT GREENSOCK EINE TIMELINE. DIE WIRD IMMER BEI MAUSROLL GETRIGGERT.

class Context extends Component {
  componentDidMount() {
    // Initialize the timeline.
    var docTimeline = new TimelineLite({ paused: true });
    docTimeline
      .add(TweenLite.to(".Context", 0.5, { y: "100%" }))
      .to(".item#first", 0.5, { y: "0%" })
      .addPause()
      .to(".item#first", 0.5, { y: "100%" })
      .to(".item#second", 0.5, { x: "0%" })
      .addPause()
      .to(".item#second", 0.5, { y: "100%" })
      .to(".item#third", 0.5, { x: "0%" })
      .reversed();

    var runOnce = 0;
    $(window).bind("mousewheel DOMMouseScroll", function(event) {
      if (runOnce === 0) {
        if (
          event.originalEvent.wheelDelta < 0 ||
          event.originalEvent.detail > 0
        ) {
          console.log("Scrolled");
          docTimeline.play();
          runOnce = 1;
          setTimeout(function() {
            runOnce = 0;
          }, 1000);
        } else {
          console.log("Scrolled");
          docTimeline.reverse();
          runOnce = 1;
          setTimeout(function() {
            runOnce = 0;
          }, 1000);
        }
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div className="Context">
          <div className="logo">
            <h2>eCommerceX</h2>
            <h5>Made By Light.</h5>
          </div>
        </div>
        <div className="items">
          <div className="item" id="first">
            <Link to={"/Item/1"}>
              <img
                src={require("../../Assets/StoreItems/1.jpg")}
                alt={""}
                title={""}
              />
            </Link>
            <h4>Dress</h4>
          </div>
          <div className="item" id="second">
            <h4>Jeans</h4>
            <Link to={"/Item/2"}>
              <img
                src={require("../../Assets/StoreItems/2.jpg")}
                alt={""}
                title={""}
              />
            </Link>
          </div>
          <div className="item" id="third">
            <Link to={"/Item/3"}>
              <img
                src={require("../../Assets/StoreItems/3.jpg")}
                alt={""}
                title={""}
              />
            </Link>
            <h4>Shirt</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Context;
