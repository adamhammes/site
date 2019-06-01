import React from 'react'
import { Link } from 'gatsby'

import './app.scss'
import './normalize.scss'
import styles from './layout.module.scss'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1 className={styles.header}>
          <Link to={`/`}>{title}</Link>
        </h1>
      )
    } else {
      header = (
        <h3 className={styles.header}>
          <Link to={`/`}>{title}</Link>
        </h3>
      )
    }
    return (
      <div>
        {header}
        {children}
      </div>
    )
  }
}

export default Layout
