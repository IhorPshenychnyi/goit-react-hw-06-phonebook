import PropTypes from "prop-types";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, handleClick }) => (
  <ul className={s.list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <span>
          {name}: {number}
        </span>
        <button className={s.btn} type="button" onClick={() => handleClick(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
  handleClick: PropTypes.func.isRequired,
};

export { ContactList };
