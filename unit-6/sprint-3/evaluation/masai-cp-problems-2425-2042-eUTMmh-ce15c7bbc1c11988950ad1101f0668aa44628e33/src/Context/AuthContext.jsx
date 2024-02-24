export const AuthContextProvider = () => {
  let providerState = {};

  //** dont change the below code **
  if (window.Cypress) {
    window.store = providerState;
  }
  //** dont change the above code **
};
