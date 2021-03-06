import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
function Navbar() {
  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/quick-start">Quick Start</Link>
          </li>
          <li>
            <Link to="/axios">Axios</Link>
          </li>
          <li>
            <Link to="/Deduplication/user">Deduplication</Link>
          </li>
          <li>
            <Link to="/options">Options</Link>
          </li>
          <li>
            <Link to="/conditional-fetching">Conditional Fetching</Link>
          </li>
          <li>
            <Link to="/dependent">Dependent</Link>
          </li>
          <li>
            <Link to="/pagination">Pagination</Link>
          </li>
          <li>
            <Link to="/mutation">Mutation</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
