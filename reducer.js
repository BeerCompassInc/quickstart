module.exports = (state, { type, payload }) => {
  switch (type) {
    case 'CHANGE_ROUTE':
      return { ...state, lastRoute: state.route, route: payload }
    case 'SHOW_MENU':
      return { ...state, showMenu: !state.showMenu }
    default:
      return { ...state }
  }
}
