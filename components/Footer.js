import React from 'react'
import styles from '../css/footer.module.css'
import cx from 'classnames'
import {prefixLink} from "gatsby-helpers";
import {Link} from 'react-router'

import FaFacebook from 'react-icons/lib/fa/facebook'
import FaTwitter from 'react-icons/lib/fa/twitter'


export default class Footer extends React.Component {

  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles["footer__quote"]}>

          <p>
            <span>The goal is not to do business</span>
            <span>with everybody who needs what we do.</span>
          </p>

          <p>
            <span>The goal is to do business</span>
            <span>with people who believe what we believe.</span>
          </p>

        </div>

        <div className={styles["footer__info"]}>
          <a className={styles["footer__top"]} href="#">
            <span>Ir al inicio</span>
          </a>

          <div className={styles["footer__info-content"]}>

            <div className={cx({
              [styles.col]:true,
              [styles["footer-social"]]: true
            })}>

              <h3 className={styles["footer__info-title"]}>Síguenos</h3>

              <ul className={styles["social-list"]}>
                <li>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/MountainviewAgency"
                    className="facebook ext">
                    <FaFacebook  className={styles.icon}/>
                  </a>
                </li>

                {/*<li>*/}
                  {/*<a*/}
                    {/*target="_blank"*/}
                    {/*href="https://twitter.com/Mountainview_be"*/}
                    {/*className="twitter ext">*/}
                    {/*<FaTwitter className={styles.icon}/>*/}
                  {/*</a>*/}

                {/*</li>*/}

              </ul>

            </div>
            <div className={cx({
              [styles.col]: true,
              [styles["footer__address"]]: true
            })}>

              <h3 className={styles["footer__info-title"]}>
                Grupo Alameda S.A.C
              </h3>

              <address >
                Modesto Calle Basadre 723, Tacna- Perú <br/>
                052 285395 <br/>
                <a href="mailto:informes@grupoalameda.pe">
                  informes@grupoalameda.pe
                </a>
              </address>
            </div>

          </div>

        </div>

        <div className={styles["footer__bottom"]}>
          <div className={styles["content"]}>
            <Link to={prefixLink("/")} className="footer__copy">©&nbsp;Grupo Alameda 2017</Link>
            <strong className={styles["footer__by"]}>Industria y Comunicación Gráfica</strong>
          </div>
        </div>

      </footer>

  )
  }

  }