import React from 'react'
import { prefixLink } from 'gatsby-helpers'
 import {PanelIntroHome, PanelWe , PanelClients, Footer} from '../components'



export default class Index extends React.Component {
  render(){
    return(
    <div>
      <PanelIntroHome/>
      <PanelWe/>
      <PanelClients/>
      <Footer/>
    </div>

    )

  }
}





