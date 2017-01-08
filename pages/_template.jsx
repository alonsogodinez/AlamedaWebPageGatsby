import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/markdown-styles'

import { rhythm } from '../utils/typography'


//ADAPTING REDUX
import { Provider } from "react-redux"
import store from "../store"


const Layout = (props) => (
  <div>

    { props.route.page.path != '/404/' &&

    <Headroom
      wrapperStyle={{
        marginBottom: rhythm(1),
      }}
      style={{
        background: 'lightgray',
      }}
    >
      <Container
        style={{
          maxWidth: 960,
          paddingTop: 0,
          padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
        }}
      >
        <Link
          to={prefixLink('/')}
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          Gatsbyss!!!
        </Link>
      </Container>
    </Headroom>

    }

    <Container
      style={{
        maxWidth: 960,
        padding: `${rhythm(1)} ${rhythm(3/4)}`,
        paddingTop: 0,

      }}
    >
      {props.children}
    </Container>
  </div>
)

Layout.propTypes = {
  chilren: React.PropTypes.any,
  route: React.PropTypes.object,
};



module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any


    }
  },

  render () {
    return (

      <Provider store={store}>
        <Layout route ={ this.props.children.props.route }>
          { this.props.children}
        </Layout>
      </Provider>
    )
  },
})


