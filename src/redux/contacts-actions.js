import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
// import { ADD, REMOVE, CHANGE_FILTER } from './action-types';

const addContact = createAction('contacts/add', data => ({
  payload: {
    id: shortid.generate(),
    name: data.name,
    number: data.number,
  },
}));

const removeContact = createAction('contacts/remove');

const changeFilter = createAction('contacts/changeFilter');

export { addContact, removeContact, changeFilter };

// const addContact = data => ({
//   type: ADD,
//   payload: {
//     id: shortid.generate(),
//     name: data.name,
//     number: data.number,
//   },
// });

// const removeContact = contactId => ({
//   type: REMOVE,
//   payload: contactId,
// });

// const changeFilter = value => ({
//   type: CHANGE_FILTER,
//   payload: value,
// });
