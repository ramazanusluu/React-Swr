import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function PaginationNavbar() {
  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li>
            <Link to="/pagination/">Pagination Home</Link>
          </li>
          <li>
            <Link to="/pagination/pagination1">Pagination Example</Link>
          </li>
          <li>
            <Link to="/pagination/pagination2">Pagination Example 2</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PaginationNavbar;
