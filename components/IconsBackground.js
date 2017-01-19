import React from 'react'
import styles from '../css/panel.module.css'
import cx from 'classnames'

export default class IconsBackground extends React.Component{

  render(){
    return (
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

    )
  }
}
