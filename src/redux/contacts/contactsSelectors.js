export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.contacts;
  }
  const normalizedFilter = filter.toLowerCase();
  const result = contacts.contacts.filter(({ name }) => {
    const normalized = name.toLowerCase();
    return normalized.includes(normalizedFilter);
  });

  return result;
};

export const isLoading = ({ contacts }) => contacts.isLoading;
export const events = ({ contacts }) => contacts.events;
