const defaultState = {
  contacts: []
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case "FETCH_CONTACTS_FULLFILLED":

      return {
        ...state,
        contacts: action.payload
      };

    default:
      return state;
  }
};
