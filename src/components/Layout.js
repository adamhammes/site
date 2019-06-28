import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";

import "../global-styles/normalize.scss";
import "../global-styles/code-style.scss";

import Seo from "./seo";
import Bio from "./Bio.js";
import styles from "./layout.module.scss";

const Header = ({ bioInHeader }) => (
  <header className={styles.header}>
    <Link to={`/`}>hammes.io/</Link>
    {bioInHeader && <Bio />}
  </header>
);

const Layout = props => {
  const { children, bioInHeader } = props;

  return (
    <div
      style={{
        maxWidth: "40rem",
        margin: "auto",
        width: "100%",
        padding: "var(--rhythm)",
      }}
    >
      <Seo {...props} />
      <Header bioInHeader={bioInHeader} />
      {children}
    </div>
  );
};

export default Layout;
export { Header };
