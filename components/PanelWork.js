import React from 'react'

import styles from '../css/work.module.css';
import cx from 'classnames'

import FaAngleRight from 'react-icons/lib/fa/angle-right'
import { Link } from 'react-router'


export default class PanelWork extends React.Component {
  render() {

    return (
      <li
        className={styles.work}
        style={
          { background: this.props.background}
        }>

        <h2
          className={styles["work__client"]}
        >
          <Link to={this.props.url}
          >
            <img src={this.props.logo_image} alt={this.props.title}/>
          </Link>
          

        </h2>

        <div
          className={styles.layout}
        >
          <div className={
            cx({
              [styles.col]: true,
              [styles["work__content"]]: true
            })
          }>
            <h3 className={styles["work__title"]}>

              {this.props.title}

              <span className={styles["work__subtitle"]}>

                {this.props.subtitle}

              </span>

            </h3>

            <div className={styles["work__description"]}>
              {this.props.description.split('.').map(paragraph =>{
                if(paragraph) return <p> { paragraph }</p>
              })}
            </div>

            <Link
              to={this.props.url}
              className={styles["work__more"]}
            >
              <span className={styles["work__more-inner"]}>
                Ver más
                <FaAngleRight/>
              </span>
            </Link>


          </div>

          <div className={
            cx({
              [styles.col]: true,
              [styles["work__cover"]]: true
            })
          }>
            <img src={this.props.cover_image} alt={this.props.subtitle}/>
          </div>

        </div>

      </li>



    )
  }

}