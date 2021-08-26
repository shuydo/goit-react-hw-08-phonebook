import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from "./contacts-actions";

// GET @ /contacts
const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get("/contacts");

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

// POST @ /contacts
const addContact = newContact => async dispatch => {
  dispatch(addContactRequest());

  await axios
    .post("/contacts", newContact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error.message)));

  console.log("after add axios");
};

// DELETE @ /contacts/:id
const deleteContact = contactId => dispatch => {
  console.log("in deleteContact");

  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error.message)));
};

// PATCH @ /contacts/:id
// const toggleCompleted =
//   ({ id, completed }) =>
//   dispatch => {
//     const update = { completed };

//     dispatch(toggleCompletedRequest());

//     axios
//       .patch(`/contacts/${id}`, update)
//       .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
//       .catch(error => dispatch(toggleCompletedError(error.message)));
//   };

const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
};
export default contactsOperations;
