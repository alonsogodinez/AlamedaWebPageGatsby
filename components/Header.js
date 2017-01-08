import React from "react"
import { connect } from "react-redux"

import { toggleMenu } from "../actions/menuActions"

@connect((store) => {
  return {
    isToggleActive: store.menu.isToggleActive,
  };
})
export default class Header extends React.Component {
  componentWillMount() {

  }

  toggleMenu() {
    this.props.dispatch(toggleMenu())
  }

  render() {
    const { isToggleActive } = this.props;

    if (!isToggleActive) {
      return <button onClick={this.toggleMenu.bind(this)}>Activa el menu</button>
    }


    return <div>
      <h1>Activado</h1>
      <button onClick={this.toggleMenu.bind(this)}>Desactiva el menu</button>

    </div>
  }
}