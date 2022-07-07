import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function OptionsNavbar() {
  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li>
            <Link to="/options/">Options Home</Link>
          </li>
          <li>
            <Link to="/options/revalidateOnFocus">RevalidateOnFocus</Link>
          </li>
          <li>
            <Link to="/options/refreshInterval">RefreshInterval</Link>
          </li>
          <li>
            <Link to="/options/revalidateIfStale">RevalidateIfStale</Link>
          </li>
          <li>
            <Link to="/options/refreshWhenHidden">RefreshWhenHidden</Link>
          </li>
          <li>
            <Link to="/options/revalidateOnReconnect">RevalidateOnReconnect</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default OptionsNavbar;
