import { useSelector, useDispatch } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

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
      {contacts.length>0 && (
        <div>
          <h3>ContactList</h3>

          <ol>
            {contacts.map(contact => (
              <li key={contact.id}>
                <p>
                  <span>
                    {contact.name}: {contact.number + "  "}
                  </span>
                  <button onClick={() => onDeleteContact(contact.id)}>
                    {/* {isDeleting ? "Deleting..." : "Delete"} */}
                    Delete
                  </button>
                </p>
              </li>
            ))}
          </ol>
        </div>
      )}
    </>
  );
}
