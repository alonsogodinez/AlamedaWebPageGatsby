import React from 'react'
import styles from '../css/panel.module.css'
import cx from 'classnames';
import { prefixLink } from 'gatsby-helpers'



export default class PanelSkill extends React.Component {


  render() {

    return (

      <section
        className={
          cx({
            [styles["panel--skills"]]: true,
            [styles["panel__content"]]: true,
          })
        }

        style={
          { background: this.props.background }
        }
      >
        <div className={styles["skill__layout"]}>
          <div className={styles.col}>
            <img src={this.props.image} alt={this.props.title}/>
          </div>
          <div className={styles.col}>
            <h2>{this.props.title}</h2>
            <div className={styles["panel-text"]}>
              {
                this.props.description.split('.').map(paragraph => {
                    if(paragraph) return <p>{paragraph + '.'}</p>
                }

                )
              }
            </div>
          </div>
        </div>


      </section>

    )

  }

}