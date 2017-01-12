//React
import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

//Components
import Headroom from 'react-headroom'
import MenuToggle from '../components/MenuToggle'
import NavMenu from '../components/NavMenu'
import { Container } from 'react-responsive-grid'

import { config } from 'config'
import Helmet from 'react-helmet'

//Style
import '../css/markdown-styles'
import '../css/global.css'
import HeaderStyles from '../css/header-styles.module.css'
import cx from 'classnames'
import { rhythm } from '../utils/typography'

//import css for headroom
import HeadRoomStyle from '../css/headroom.css'




//REDUX
import { Provider } from "react-redux"
import store from "../store"



const Layout = (props) => (
  <div>

    { props.route.page.path != '/404/' &&

    <Headroom

      style={HeadRoomStyle.headroom}
    >
      <Container
        style= { {maxWidth: "100%"}}
        className={cx({
          [HeaderStyles.header]: true,
          [HeaderStyles.cf]: true
        }) }
      >
        <Link
          to={prefixLink('/')}
          className= {HeaderStyles.header__logo}
        >
        </Link>
        <MenuToggle />
        <NavMenu/>
      </Container>
    </Headroom>

    }

    <Helmet
      title={config.siteTitle}
      meta={[
        {"name": "description", "content": "Grupo Alameda SC"},
        {"name": "keywords", "content": "imprenta, grupo alameda, imprenta tacna"},
      ]}
    />

    {props.children}

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


