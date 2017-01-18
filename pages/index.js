import React from 'react'
import { prefixLink } from 'gatsby-helpers'
 import {PanelIntro, PanelWe , PanelClients} from '../components'



export default class Index extends React.Component {
  render(){
    return(
    <div>
      <PanelIntro/>
      <PanelWe/>
      <PanelClients/>
    </div>

    )

  }
}





