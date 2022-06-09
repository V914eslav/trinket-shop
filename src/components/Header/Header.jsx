import React, { Component } from "react";

import styles from "./Header.module.css";
import cn from "classnames";

export default class Header extends Component {
  render() {
    return (
      <nav className={cn("green", "darken-1", styles.nav)}>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            React Movies
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
