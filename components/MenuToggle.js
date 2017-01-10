import React from "react"
import { connect } from "react-redux"
import { toggleMenu } from "../actions/menuActions"
import cx from 'classnames';
import styles from '../css/header-styles.module.css'

@connect((store) => {
  return {
    isToggleActive: store.menu.isToggleActive
  };
})
export default class Header extends React.Component {

  toggleMenu() {
    this.props.dispatch(toggleMenu())
  }

  render() {
    const { isToggleActive } = this.props;

    return (

      <a
          id="toggle-mobile-nav"
          href="#"
          onClick={ this.toggleMenu.bind(this)}
          className={cx({
            [ styles["header__mobile-nav"] ]: true,
            [ styles["is-active"] ]: isToggleActive
          }) }
      >
        <span>Menu</span>

      </a>
    )
 }
}