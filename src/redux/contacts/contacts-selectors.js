import { createSelector } from "@reduxjs/toolkit";

const getLoading = state => state.contacts.loading;
const getFilter = state => state.contacts.filter; 
const getAllContacts = state => state.contacts.items;

const getTotalContactCount = state => {
  const contacts = getAllContacts(state);
  return contacts.length;
};

const getCompletedContactCount = createSelector([getAllContacts], contacts => {
  return contacts.reduce(
    (total, contact) => (contact.completed ? total + 1 : total),
    0
  );
});
// M!
export const getVisibleContacts = createSelector(
  [getFilter, getAllContacts],
  (filter, contacts) => {
    const normalizeFilter = filter.toLowerCase();
    return contacts
      .filter(
        ({ name, number }) =>
          name.toLowerCase().includes(normalizeFilter) ||
          number.includes(normalizeFilter)
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  }
);

const contactsSelectors = {
  getLoading,
  getFilter,
  getVisibleContacts,
  getTotalContactCount,
  getCompletedContactCount,
};

export default contactsSelectors;
// const getVisibleContacts = createSelector(
//   [getAllContacts, getFilter],
//   (contacts, filter) => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(({ description }) =>
//       description.toLowerCase().includes(normalizedFilter)
//     );
//   }
// );
