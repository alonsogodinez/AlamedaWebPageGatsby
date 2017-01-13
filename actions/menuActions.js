
export function toggleMenu() {
  return {
    type: "TOGGLE_MENU",
  }
}


export function hideMenu(isActive){

  if(isActive) {
    return {
      type: "HIDE_MENU"
    }
  }

}
