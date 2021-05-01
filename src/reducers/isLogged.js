export default function isLogged(state = false, action) {
  switch (action.type) {
    case "SIGN_UP":
      return !state;
    default:
      return state;
  }
}
