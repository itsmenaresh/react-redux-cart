import React from "react";
import {connect} from "react-redux";

const Navbar = ({total})=>{
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <a className="navbar-brand" href="#">Shopping Cart - {total}</a>
  </nav>
  )
}

const mapStateToProps = (state)=>{
  const total = state.reduce((acc, item)=> acc + item.count, 0);
  return {
    total
  }
}

export default connect(mapStateToProps)(Navbar);