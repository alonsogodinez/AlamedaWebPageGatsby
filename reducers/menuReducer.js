
export default function reducer(state={

  isToggleActive: false,
}, action) {

  switch (action.type) {
    case "TOGGLE_MENU": {
      return {...state, isToggleActive: !state.isToggleActive}
    }
    case "HIDE_MENU": {
      return {...state, isToggleActive: false}
    }
  }

  return state
}