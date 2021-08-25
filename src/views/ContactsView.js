import { /*useState,*/ useEffect } from "react";
import { useDispatch /*, useSelector */ } from "react-redux";
// import Container from '../components/Container';
import ContactForm from "../Comps/ContactForm/ContactForm";
import ContactList from "../Comps/ContactList";
// import TodoEditor from '../components/TodoEditor';
// import Filter from '../components/TodoFilter';
// import Stats from '../components/Stats';
// import Modal from '../components/Modal';
// import IconButton from '../components/IconButton';
// import { ReactComponent as AddIcon } from '../icons/add.svg';
import { contactsOperations /*, contactsSelectors */ } from "../redux/contacts";

// const barStyles = {
//   display: 'flex',
//   alignItems: 'flex-end',
//   marginBottom: 20,
// };

export default function ContactsView(params) {
  const dispatch = useDispatch();
  // const isLoadingTodos = useSelector(todosSelectors.getLoading);

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const toggleModal = () => setIsModalOpen(state => !state);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    // <Container>
    <>
      {/* <div style={barStyles}>
        <Filter />
        <Stats />
        <IconButton onClick={toggleModal} aria-label="Добавить todo">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>

        {isLoadingTodos && <h1>Загружаем...</h1>}
      </div> */}
      <ContactForm />
      <ContactList />

      {/* {isModalOpen && (
        <Modal onClose={toggleModal}>
          <TodoEditor onSave={toggleModal} />
        </Modal>
      )} */}
    </>
    // </Container>
  );
}
