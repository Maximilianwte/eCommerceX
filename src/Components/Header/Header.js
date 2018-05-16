import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./Header.css";

class Header extends Component {
  switchHeader() {
    $(".arrowDown svg").toggleClass("rotateSVG");
    $(".sideBar").toggleClass("slideUp");
  }
  componentDidMount() {}
  render() {
    return (
      <div className="wrapper">
        <div className="sideBar">
          <div className="inlet">
            <div className="leftSide">
              <div className="Logo">
                <Link to="/">HOME</Link>
              </div>
              <div className="Social" />
            </div>
            <div className="rightSide">
              <div className="Login">
                <Link to="/login">LOGIN</Link>
              </div>
              <div className="cart">
                <Link to="/Cart">CART ({this.props.Cart_Items})</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="arrowDown">
          <svg
            onClick={this.switchHeader}
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 292.362 292.362"
          >
            <g>
              <path
                d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424
C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428
s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"
              />
            </g>
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
          </svg>
        </div>
      </div>
    );
  }
}

// Data from our Store gets passed into Props here.
function mapStateToProps(state) {
  return {
    Purchase_State: state.Purchase_State,
    Cart_Items: state.Cart_Items
  };
}

// We connect our components function (onSelectMood) to the actionCreator (selectMood)
const mapActionsToProps = {
  // onSelectMood: selectMood
};

export default connect(mapStateToProps, mapActionsToProps)(Header);
