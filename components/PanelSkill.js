import React from 'react'
import styles from '../css/panel.module.css'
import cx from 'classnames';


export default class PanelSkill extends React.Component {


  render() {

    return (

      <section className={styles["panel__content"]} style={{
        background: this.props.background
      }

      }>
        <div className={styles["skill__layout"]}>
          <div className="col">
            <img src={this.props.image} alt={this.props.title}/>
          </div>
          <div className="col">
            <h2>{this.props.title}</h2>
            <div className="panel-text">
              {
                this.props.description.split('.').map(paragraph =>
                  <p>{paragraph + '.'}</p>
                )
              }
            </div>
          </div>
        </div>


      </section>

    )

  }

}