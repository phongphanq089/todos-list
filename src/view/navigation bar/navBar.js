import React from "react";
import "./Nav.scss";
import {
   Link,
    NavLink
  
  } from "react-router-dom";
class Navigation extends React.Component {

    render() {
        return (
            <div class="topnav">

                <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink > 
                <NavLink to="/todo" activeClassName="active">Todos</NavLink > 
                <NavLink to="/about" activeClassName="active">about</NavLink > 
                
                {/* <a class="active" href="/">Home</a>
                <a href="/todo">todos</a>
               
                <a href="/about">About</a> */}
            </div>
        )
    }
}
export default Navigation;