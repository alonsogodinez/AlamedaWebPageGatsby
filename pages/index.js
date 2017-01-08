import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

import Header from '../components/Header'



export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Grupo Alameda SC"},
            {"name": "keywords", "content": "imprenta, grupo alameda, imprenta tacna"},
          ]}
        />

        <h1>
          Hi people
        </h1>
        <Header/>


      </div>
    )
  }
}





