import { client } from "../../api";
const url = "/contacts";
export const fetchContacts = () => {
  return dispatch => {
    client
      .get(url)
      .then(resp =>
        dispatch({ type: "FETCH_CONTACTS_FULLFILLED", payload: resp.data })
      )
      .catch(err => dispatch({ type: "FETCH_CONTACTS_REJECTED", error: err }));
  };
};

export function newContact() {
  return dispatch => {
    dispatch({
      type: "NEW_CONTACT"
    });
  };
}
export function saveContact(contact) {
  return dispatch => {
    return dispatch({
      type: "SAVE_CONTACT",
      payload: client.post(url, contact)
    });
  };
}

export function fetchContact(id) {
  return dispatch => {
    return dispatch({
      type: "FETCH_CONTACT",
      payload: client.get(`${url}/${id}`)
    });
  };
}
export function updateContact(contact) {
  return dispatch => {
    return dispatch({
      type: "UPDATE_CONTACT",
      payload: client.put(`${url}/${contact.id}`, contact)
    });
  };
}

export function deleteContact(id) {
  console.log('deleteContact');
  
  return dispatch => {
    console.log('deleteContact 2');
    return dispatch({
      type: "DELETE_CONTACT",
      payload: client.delete(`${url}/${id}`)
    });
  };
}
