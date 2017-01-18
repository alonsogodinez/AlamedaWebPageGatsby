import React from "react";
import styles from "../css/panel.module.css"
import cx from 'classnames'
import { prefixLink } from 'gatsby-helpers'
import {Link} from 'react-router'


export default class PanelClients extends React.Component {

  render () {
    return (

      <section className={cx({
        [styles.panel]: true,
        [styles["panel--clients"]]: true
      })}>
        <div className={styles["panel__content"]}>
          <ul className={styles["client-list"]}>
            <li className={styles["client-container"]}>
              <span className={styles.client}>
                <img src={prefixLink('./assets/client.png')} alt=""/>
              </span>
            </li>
            <li className={styles["client-container"]}>
              <span className={styles.client}>
                <img src={prefixLink('./assets/client.png')} alt=""/>
              </span>
            </li>
            <li className={styles["client-container"]}>
              <span className={styles.client}>
                <img src={prefixLink('./assets/client.png')} alt=""/>
              </span>
            </li>
            <li className={styles["client-container"]}>
              <span className={styles.client}>
                <img src={prefixLink('./assets/client.png')} alt=""/>
              </span>
            </li>
            <li className={styles["client-container"]}>
              <span className={styles.client}>
                <img src={prefixLink('./assets/client.png')} alt=""/>
              </span>
            </li>
            <li className={styles["client-container"]}>
              <span className={styles.client}>
                <img src={prefixLink('./assets/client.png')} alt=""/>
              </span>
            </li>
            <li className={styles["client-container"]}>
              <span className={styles.client}>
                <img src={prefixLink('./assets/client.png')} alt=""/>
              </span>
            </li>
            <li className={styles["client-container"]}>
              <span className={styles.client}>
                <img src={prefixLink('./assets/client.png')} alt=""/>
              </span>
            </li>
            <li className={styles["client-container"]}>
              <span className={styles.client}>
                <img src={prefixLink('./assets/client.png')} alt=""/>
              </span>
            </li>
            <li className={styles["client-container"]}>
              <span className={styles.client}>
                <img src={prefixLink('./assets/client.png')} alt=""/>
              </span>
            </li>
            <li className={styles["client-container"]}>
              <span className={styles.client}>
                <img src={prefixLink('./assets/client.png')} alt=""/>
              </span>
            </li>
            <li className={styles["client-container"]}>
              <span className={styles.client}>
                <img src={prefixLink('./assets/client.png')} alt=""/>
              </span>
            </li>
            <li className={styles["client-container"]}>
              <span className={styles.client}>
                <img src={prefixLink('./assets/client.png')} alt=""/>
              </span>
            </li>
            <li className={styles["client-container"]}>
              <span className={styles.client}>
                <img src={prefixLink('./assets/client.png')} alt=""/>
              </span>
            </li>
            <li className={styles["client-container"]}>
              <span className={styles.client}>
                <img src={prefixLink('./assets/client.png')} alt=""/>
              </span>
            </li>
          </ul>

          <Link className={styles["portfolio-link"]} to="/portafolio/">
            { "Mira nuestro portafolio "}
            <icon className={styles.icon }>{ " \u276F"}</icon>
          </Link>

        </div>

      </section>

    )
  }
}