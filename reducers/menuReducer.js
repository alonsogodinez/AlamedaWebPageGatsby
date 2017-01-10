
export default function reducer(state={

  isToggleActive: false,
  items: [
    {
      title: "BIENVENIDO",
      selected: true,
    }
  ]
}, action) {

  switch (action.type) {
    case "TOGGLE_MENU": {
      return {...state, isToggleActive: !state.isToggleActive}
    }
  }

  return state
}