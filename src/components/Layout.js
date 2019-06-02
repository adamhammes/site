import React from 'react'
import { Link } from 'gatsby'

import '../global-styles/normalize.scss'
import '../global-styles/prism-theme.scss'

import styles from './layout.module.scss'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const headerHomeClass =
      location.pathname === rootPath ? styles.headerHome : ''

    const header = (
      <header className={`${styles.header} ${headerHomeClass}`}>
        <Link to={`/`}>{title}/</Link>
      </header>
    )

    return (
      <div>
        {header}
        {children}
      </div>
    )
  }
}

export default Layout
