import { useState } from "react"; // import { useCreateContactMutation } from "../../redux/slices/contacts";
import { useDispatch } from "react-redux";
import contactsOperations from "../../redux/contacts/contacts-operations";

// console.log(contactsOperations.addContact);
// contactsOperations.addContact("qqq");

const initState = { name: "", number: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initState);
  const dispatch = useDispatch();
  // const [createContact] = useCreateContactMutation();

  const inptHndlr = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(contactsOperations.addContact(form));
    setForm(initState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Name</h3>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={form.name}
        onChange={inptHndlr}
      />

      <h3>Number</h3>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        value={form.number}
        onChange={inptHndlr}
      />
      <br></br>
      <button type="submit">Add contact</button>
    </form>
  );
}
