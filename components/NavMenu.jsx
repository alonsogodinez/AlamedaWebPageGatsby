import React from 'react'

import { connect } from "react-redux"
import cx from 'classnames'
import { prefixLink } from 'gatsby-helpers'

//Components
import {IndexLink, Link} from 'react-router'


//Styles
import HeaderNav from '../css/header-nav.module.css'
import HeaderStyles from '../css/header-styles.module.css'




@connect((store) => {
  return {
    isToggleActive: store.menu.isToggleActive
  };
},null, null,{pure:false})
export default class NavMenu extends React.Component {


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
            activeClassName={HeaderStyles.active}
          >
            <span> BIENVENIDO </span>
          </IndexLink>

        </li>

        <li className={HeaderStyles["header__nav-item"]}>
          <Link
            to={prefixLink("/habilidades/")}
            activeClassName={HeaderStyles.active}
          >
            <span> HABILIDADES </span>
          </Link>

        </li>
        <li className={HeaderStyles["header__nav-item"]}>
          <Link
            to={prefixLink("/portafolio/")}
            activeClassName={HeaderStyles.active}
          >
            <span> PORTAFOLIO </span>
          </Link>

        </li>

        <li className={HeaderStyles["header__nav-item"]}>
          <Link
            to={prefixLink("/contactanos/")}
            activeClassName={HeaderStyles.active}
          >
            <span> CONTÁCTANOS </span>
          </Link>

        </li>

      </ul>


    )

  }

}