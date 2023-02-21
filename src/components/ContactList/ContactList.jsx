import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/contacts/contactsSlice';
import { getFilteredContacts } from 'redux/contacts/contactsSelectors';
import { Stats, StatsLi, Item, Btn } from './ContactList.styled';

const ContactList = () => {
  const list = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(removeContact(id));
  return (
    <Stats>
      {list.map(({ id, name, number }) => (
        <StatsLi key={id}>
          <Item>{name}:</Item>
          <Item>{number}</Item>
          <Btn type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Btn>
        </StatsLi>
      ))}
    </Stats>
  );
};

export default ContactList;
