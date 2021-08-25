// import {
//   useFetchContactsQuery,
//   useDeleteContactMutation,
// } from "../../redux/slices/contacts";

// import { useSelector } from "react-redux";

// const getFilterContacts = (contacts, filterQ) =>
//   contacts.filter(({ name }) =>
//     name.toLowerCase().includes(filterQ.toLowerCase())
//   );

// import Todo from '../Todo';

import { useSelector /*, useDispatch */ } from "react-redux";
import {
  /* contactsOperations, */ contactsSelectors,
} from "../../redux/contacts";

export default function ContactList() {
  // const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  // const { data: contacts, isFetching } = useFetchContactsQuery();
  // const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation(); // console.log(data);

  // const filter = useSelector(state => state.filter);

  // console.log("state.filter: ", filter);
  // let dBase = [];
  // if (!isFetching) {
  //   console.log("contacts: "), contacts;
  //   dBase = getFilterContacts(contacts, filter);
  // }

  return (
    <>
      {/* {isFetching && <p>Loading...</p>} */}
      {contacts && (
        <div>
          <h3>ContactList</h3>

          <ol>
            {contacts.map(contact => (
              <li key={contact.id}>
                <p>
                  <span>
                    {contact.name}: {contact.number + "  "}
                  </span>
                  {/* <button onClick={() => deleteContact(contact.id)}>
                    {isDeleting ? "Deleting..." : "Delete"}
                  </button> */}
                </p>
              </li>
            ))}
          </ol>
        </div>
      )}
    </>
  );
}
