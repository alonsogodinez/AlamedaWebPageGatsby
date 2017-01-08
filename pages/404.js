import React from 'react'
import styles from './404.module.css'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class PostCSS extends React.Component {
  render () {
    return (
      <div className={styles.container_404}>
        <Helmet
          title={`${config.siteTitle} | Página no encontrada`}
        />
        <h2 className={styles.h1}>
          NO ENCONTRAMOS LO QUE BUSCABAS ☹
        </h2>
      </div>
    )
  }
}

