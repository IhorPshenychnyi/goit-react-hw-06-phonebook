import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact, changeFilter } from './contacts-actions';
// import { ADD, REMOVE, CHANGE_FILTER } from './action-types';

const items = createReducer([], {
  [addContact]: (state, { payload }) => {
    const existContact = state.some(
      contact => contact.name.toLowerCase() === payload.name.toLowerCase(),
    );

    if (existContact) {
      alert(`${payload.name} is already in contacts.`);
      return [...state];
    }
    return [...state, payload];
  },
  [removeContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case ADD:
//       const existContact = state.some(
//         contact => contact.name.toLowerCase() === payload.name.toLowerCase(),
//       );

//       if (existContact) {
//         alert(`${payload.name} is already in contacts.`);
//         return [...state];
//       }
//       return [...state, payload];

//     case REMOVE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };
