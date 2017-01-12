import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'




import cx from 'classnames'
import styles from '../css/panel.module.css'




export default class Index extends React.Component {
  render () {
    return (

      <section className={cx({
        [styles.panel]: true,
        [styles["panel--intro"]]: true,
        [styles["panel--home"]]: true,
        [styles["show"]]: true
      })}>

        <div className={styles["panel__content"]}>




          {/* EXTRA ICONS AND LINES
          <div className={styles["video-hp__icons"]}
               //style="top: 287.96px; margin-top: -215px; margin-left: -383px; width: 767.893px; height: 431.94px;"
          >
            <div className={styles["video-hp__line"]}></div>

            <div className={cx({
              [styles["video-hp__shard "]]: true,
              [styles["video-hp__shard--1"]]: true
            }) }>

            </div>

            <div className={cx({
              [styles["video-hp__shard "]]: true,
              [styles["video-hp__shard--2"]]: true
            }) }>

            </div>

            <div className={cx({
              [styles["video-hp__circle "]]: true,
              [styles["video-hp__circle--1"]]: true
            }) }>

            </div>

            <div className={cx({
              [styles["video-hp__circle "]]: true,
              [styles["video-hp__circle--2"]]: true
            }) }>

            </div>

            <div className={cx({
              [styles["video-hp__circle "]]: true,
              [styles["video-hp__circle--3"]]: true
            }) }>

            </div>

            <div className={cx({
              [styles["video-hp__circle "]]: true,
              [styles["video-hp__circle--4"]]: true
            }) }>

            </div>

            <div className={cx({
              [styles["video-hp__circle "]]: true,
              [styles["video-hp__circle--5"]]: true
            }) }>

            </div>

            <div className={cx({
              [styles["video-hp__stroke "]]: true,
              [styles["video-hp__stroke--1"]]: true
            }) }>

            </div>

            <div className={cx({
              [styles["video-hp__stroke "]]: true,
              [styles["video-hp__stroke--2"]]: true
            }) }>

            </div>

          </div>

           */}

        </div>

      </section>

    )
  }
}





