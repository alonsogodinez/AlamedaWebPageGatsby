import React from 'react'

import { connect } from "react-redux"
import cx from 'classnames'

//Components
import {Link} from 'react-router'

//Styles
import HeaderNav from '../css/header-nav.module.css'
import HeaderStyles from '../css/header-styles.module.css'




@connect((store) => {
  return {
    isToggleActive: store.menu.isToggleActive
  };
})
export default class NavMenu extends React.Component {


  render() {
    console.log("props", this.props)
    return (

      <ul
        className={cx({
          [HeaderNav.nav] : true,
          [HeaderStyles['header__nav']]: true,
          [HeaderStyles["is-active"]]: this.props.isToggleActive
        }) }
      >
        <li className={HeaderStyles["header__nav-item"]}>
          <Link
            to="/bienvenido/"
            activeClassName="{HeaderStyles.active}"
          >
            <span> BIENVENIDO </span>
          </Link>

        </li>
        <li className={HeaderStyles["header__nav-item"]}>
          <Link
            to="/metodologia/"
            activeClassName="{HeaderStyles.active}"
          >
            <span> METODOLOGÍA </span>
          </Link>

        </li>
        <li className={HeaderStyles["header__nav-item"]}>
          <Link
            to="/habilidades/"
            activeClassName="{HeaderStyles.active}"
          >
            <span> HABILIDADES </span>
          </Link>

        </li>
        <li className={HeaderStyles["header__nav-item"]}>
          <Link
            to="/portafolio/"
            activeClassName="{HeaderStyles.active}"
          >
            <span> PORTAFOLIO </span>
          </Link>

        </li>

        <li className={HeaderStyles["header__nav-item"]}>
          <Link
            to="/conocenos/"
            activeClassName="{HeaderStyles.active}"
          >
            <span> CONÓCENOS </span>
          </Link>

        </li>

        <li className={HeaderStyles["header__nav-item"]}>
          <Link
            to="/contactanos/"
            activeClassName="{HeaderStyles.active}"
          >
            <span> CONTÁCTANOS </span>
          </Link>

        </li>

      </ul>


    )

  }

}