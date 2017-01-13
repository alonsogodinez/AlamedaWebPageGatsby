import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'




import cx from 'classnames'
import styles from '../css/panel.module.css'


class PanelIntro extends React.Component {

  render () {
    return (

      <section className={cx({
        [styles.panel]: true,
        [styles["panel--intro"]]: true,
        [styles["panel--home"]]: true,
        [styles["show"]]: true
      })}>

        <div className={styles["panel__content"]}>

          <div className={styles["intro__icons"]}
          >
            <div className={styles["intro__line"]}></div>

            <div className={cx({
              [styles["intro__shard"]]: true,
              [styles["intro__shard--1"]]: true
            }) }>

            </div>

            <div className={cx({
              [styles["intro__shard"]]: true,
              [styles["intro__shard--2"]]: true
            }) }>

            </div>

            <div className={cx({
              [styles["intro__circle"]]: true,
              [styles["intro__circle--1"]]: true
            }) }>

            </div>

            <div className={cx({
              [styles["intro__circle"]]: true,
              [styles["intro__circle--2"]]: true
            }) }>

            </div>

            <div className={cx({
              [styles["intro__circle"]]: true,
              [styles["intro__circle--3"]]: true
            }) }>

            </div>

            <div className={cx({
              [styles["intro__circle"]]: true,
              [styles["intro__circle--4"]]: true
            }) }>

            </div>

            <div className={cx({
              [styles["intro__circle"]]: true,
              [styles["intro__circle--5"]]: true
            }) }>

            </div>

            <div className={cx({
              [styles["intro__stroke"]]: true,
              [styles["intro__stroke--1"]]: true
            }) }>

            </div>

            <div className={cx({
              [styles["intro__stroke"]]: true,
              [styles["intro__stroke--2"]]: true
            }) }>

            </div>

          </div>


        </div>
      </section>

    )
  }
}


class PanelWe extends React.Component {

  render () {
    return (

      <section className={cx({
        [styles.panel]: true,
        [styles["panel--we"]]: true
      })}>

        <div className={styles["panel__content"]}>
          <h2> HOLA </h2>
        </div>

      </section>

    )
  }
}

export default class Index extends React.Component {
  render(){
    return(
    <div>
      <PanelIntro/>
      {/*<PanelWe/>*/}
    </div>

    )

  }
}





