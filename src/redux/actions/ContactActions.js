//import { contacts } from "../../contacts";
import { client } from "../../api";

export const fetchContacts = () => {
  return dispatch => {
    client
      .get("/contacts")
      .then(resp =>
        dispatch({ type: "FETCH_CONTACTS_FULLFILLED", payload: resp.data })
      );
  };
};
