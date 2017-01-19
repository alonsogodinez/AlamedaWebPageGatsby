import React from "react"
import styles from '../css/panel.module.css'
import cx from 'classnames'
import IconsBackground from './IconsBackground'



export default class PanelIntroSkills extends React.Component {

  render () {
    return (

      <section className={cx({
        [styles.panel]: true,
        [styles["panel--intro"]]: true,
        [styles["panel--skills"]]: true,
        [styles["show"]]: true
      })}>

        <div className={styles["panel__content"]}>
          <h2>Habilidades</h2>
          <IconsBackground/>

        </div>
      </section>

    )
  }
}


