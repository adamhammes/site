import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";

import "../global-styles/normalize.scss";
import "../global-styles/code-style.scss";

import Seo from "./seo";
import Bio from "./Bio.js";
import styles from "./layout.module.scss";

class Layout extends React.Component {
  render() {
    const { children, bioInHeader } = this.props;

    const header = (
      <header className={styles.header}>
        <Link to={`/`}>hammes.io/</Link>
        {bioInHeader && <Bio />}
      </header>
    );

    return (
      <>
        <Seo {...this.props} />
        {header}
        {children}
      </>
    );
  }
}

export default Layout;
