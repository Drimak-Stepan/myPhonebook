export const getContacts = store => store.contacts;

export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts;
  }
  const normalizedFilter = filter.toLowerCase();
  const result = contacts.filter(({ name }) => {
    const normalized = name.toLowerCase();
    return normalized.includes(normalizedFilter);
  });

  return result;
};
