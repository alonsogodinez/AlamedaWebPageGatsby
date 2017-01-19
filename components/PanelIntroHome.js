import React from "react"
import styles from '../css/panel.module.css'
import cx from 'classnames'
import IconsBackground from './IconsBackground'


export default class PanelIntroHome extends React.Component {

  render () {
    return (

      <section className={cx({
        [styles.panel]: true,
        [styles["panel--intro"]]: true,
        [styles["panel--home"]]: true,
        [styles["show"]]: true
      })}>

        <div className={styles["panel__content"]}>
          <IconsBackground/>
        </div>
      </section>

    )
  }
}


