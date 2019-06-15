import React from "react";
import { Link } from "gatsby";

import "../global-styles/normalize.scss";
import "../global-styles/code-style.scss";

import Bio from "./Bio.js";
import styles from "./layout.module.scss";

class Layout extends React.Component {
  render() {
    const { location, title, children, bioInHeader } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    const headerHomeClass =
      location.pathname === rootPath ? styles.headerHome : "";

    const header = (
      <header className={`${styles.header} ${headerHomeClass}`}>
        <Link to={`/`}>{title}/</Link>
        {bioInHeader && <Bio />}
      </header>
    );

    return (
      <div>
        {header}
        {children}
      </div>
    );
  }
}

export default Layout;
