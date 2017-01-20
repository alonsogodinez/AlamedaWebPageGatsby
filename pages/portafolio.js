import React from 'react'
import  {Footer , PanelWork } from '../components'
import  styles from '../css/work.module.css'
import {prefixLink} from 'gatsby-helpers'

export default class Portafolio extends React.Component {

  panelwork ={
    background: "#081423",
    logo_image: prefixLink("/./assets/work__logo.jpg"),
    cover_image: prefixLink("/./assets/work__cover.jpg"),
    title: "CLAY",
    subtitle: "DISRUPTIVE DIGITAL STARTUP",
    description:"We helped the team from HINS to launch their mobile application called "+
    "Clay music. Through this application, you will live a new digital experience with your" +
    " smartphone. During this mission, we create a tailor made univers dedicated to the " +
    "application. We developed all the digital communication and online campaign.",
    url: "#"

  }

  render() {
    return (
      <div>
        <ul className={styles["works-list"]}>
          <PanelWork {...this.panelwork}/>
          <PanelWork {...this.panelwork}/>
          <PanelWork {...this.panelwork}/>
        </ul>
        <Footer/>
      </div>

    )
  }


}