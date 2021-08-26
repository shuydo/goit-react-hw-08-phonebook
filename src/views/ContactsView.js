import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Container from '../Comps/Container';
import ContactForm from "../Comps/ContactForm/ContactForm";
import ContactList from "../Comps/ContactList";
// import Filter from '../Comps/ContactFilter';
// import Modal from '../Comps/Modal';
// import IconButton from '../Comps/IconButton';
// import { ReactComponent as AddIcon } from '../icons/add.svg';
import { contactsOperations  } from "../redux/contacts";
// const barStyles = {
//   display: 'flex',
//   alignItems: 'flex-end',
//   marginBottom: 20,
// };

export default function ContactsView() {
  const dispatch = useDispatch();
  // const isLoading Contacts = useSelector(contactsSelectors.getLoading);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const toggleModal = () => setIsModalOpen(state => !state);
  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <Container>
    <>
      {/* <div style={barStyles}>
        <Filter />
        {isLoadingContacts && <h1>Загружаем...</h1>}
      </div> */}
      <ContactForm />
      <ContactList />
      {/* {isModalOpen && (
        <Modal onClose={toggleModal}>
          <ContactsEditor onSave={toggleModal} />
        </Modal>
      )} */}
    </>
    </Container>
  );
}
