import React from 'react'
import styles from '../css/footer.module.css'
import cx from 'classnames'
import {prefixLink} from "gatsby-helpers";
import {Link} from 'react-router'

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

        </div>

        <div className={styles["footer__bottom"]}>
          <div className={styles["content"]}>
            <Link to={prefixLink("/")} className="footer__copy">©&nbsp;Grupo Alameda 2017</Link>
            <strong className="footer__by">Graphic Design Agency</strong>
          </div>
        </div>

      </footer>

    )
  }

}