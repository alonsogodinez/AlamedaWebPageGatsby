import React from "react";
import styles from "../css/panel.module.css"
import cx from 'classnames'
import { prefixLink } from 'gatsby-helpers'


export default class PanelWe extends React.Component {

  render () {
    return (

      <section className={cx({
        [styles.panel]: true,
        [styles["panel--we"]]: true
      })}>

        <div className={styles["panel__content"]}>
          <h2 className={styles["panel__decorated-title"]}>
            <span>Quiénes somos?</span>
          </h2>
          <div className={styles["panel__description-layout"]}>
            <div className={styles["col"]}>
              <p>
                Mountainview is a digital strategy agency.
                Our aim is to assist our customers in defining a digital role within their
                communication, including integrating it into their tools.
              </p>

              <p>In order to achieve this, we developed a unique approach combining user
                know-how, brand message, competitive vision and consumer experience.
                Our aim is to propose a relevant approach for the brand but also, and especially,
                for consumers.
              </p>

              <p>Nowadays, we have the chance to work for a large number of brands known for
                their requirements in terms of quality but also for their results research.
              </p>
            </div>
            <div className={styles["col"]}>
              <img src={prefixLink('./assets/panel--intro-logo.png')}/>
            </div>
          </div>
        </div>

      </section>

    )
  }
}