import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import { getFilteredContacts } from 'redux/contacts/contactsSelectors';
import { Stats, StatsLi, Item, Btn } from './ContactList.styled';

const ContactList = () => {
  const list = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));
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
