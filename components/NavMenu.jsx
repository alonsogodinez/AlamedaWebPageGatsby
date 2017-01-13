import React from 'react'

import { connect } from "react-redux"
import cx from 'classnames'
import { prefixLink } from 'gatsby-helpers'

//Components
import {IndexLink, Link} from 'react-router'


//Styles
import HeaderNav from '../css/header-nav.module.css'
import HeaderStyles from '../css/header-styles.module.css'

//Actions
//import { hideMenu } from "../actions/menuActions"


@connect(
  (store) => {
    return {
      isToggleActive: store.menu.isToggleActive
    };
  },
  null,
  null,
  {pure:false}
)



export default class NavMenu extends React.Component {

  hideMenu(){
    //FIXME
    // hacked with normal click due the conflict with react-router.
    // When state changes on  onclick event, all page is re-rendered
    // for some reason.
    document.getElementById("toggle-mobile-nav").click()

  }


  render() {

    return (

      <ul
        className={cx({
          [HeaderNav.nav] : true,
          [HeaderStyles['header__nav']]: true,
          [HeaderStyles["is-active"]]: this.props.isToggleActive
        }) }
      >
        <li className={HeaderStyles["header__nav-item"]}>
          <IndexLink
            to={prefixLink("/")}
            onClick={this.hideMenu.bind(this)}
            activeClassName={HeaderStyles.active}
          >
            <span> BIENVENIDO </span>
          </IndexLink>

        </li>

        <li className={HeaderStyles["header__nav-item"]}>
          <Link
            to={prefixLink("/habilidades/")}
            onClick={this.hideMenu.bind(this)}
            activeClassName={HeaderStyles.active}
          >
            <span> HABILIDADES </span>
          </Link>

        </li>
        <li className={HeaderStyles["header__nav-item"]}>
          <Link
            to={prefixLink("/portafolio/")}
            onClick={this.hideMenu.bind(this)}
            activeClassName={HeaderStyles.active}
          >
            <span> PORTAFOLIO </span>
          </Link>

        </li>

        <li className={HeaderStyles["header__nav-item"]}>
          <Link
            to={prefixLink("/contactanos/")}
            onClick={this.hideMenu.bind(this)}
            activeClassName={HeaderStyles.active}
          >
            <span> CONTÁCTANOS </span>
          </Link>

        </li>

      </ul>


    )

  }

}