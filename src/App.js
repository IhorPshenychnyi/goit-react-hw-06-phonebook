import { useEffect, useState } from "react";
import shortid from "shortid";

import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { Filter } from "./components/Filter/Filter";

import s from "./App.module.css";

const initialValue = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(initialValue);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const localContacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(localContacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (data) => {
    const existContact = contacts.some(
      (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (existContact) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    setContacts((prevState) => [
      {
        id: shortid.generate(),
        name: data.name,
        number: data.number,
      },
      ...prevState,
    ]);
  };

  const handleRemove = (id) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== id)
    );
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />

      <ContactList contacts={getVisibleContacts()} handleClick={handleRemove} />
    </div>
  );
}

export default App;
