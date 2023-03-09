import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import { getFilteredContacts, events } from 'redux/contacts/contactsSelectors';

import { Stats, StatsLi, Item, Btn } from './ContactList.styled';
import { FiUser, FiPhone, FiTrash2 } from 'react-icons/fi';
import DeleteLoader from '../Loader/DeleteLoader';
import toast from 'react-hot-toast';

const ContactList = () => {
  const list = useSelector(getFilteredContacts);

  const idBtn = useSelector(events);
  const dispatch = useDispatch();
  const onDeleteContact = async id => {
    const status = await dispatch(deleteContact(id));
    if (status.meta.requestStatus === 'fulfilled') {
      toast('Contact deleted', { style: { color: '#e84a5f' } });
    }
  };

  return list.length >= 1 ? (
    <Stats>
      {list.map(({ id, name, number }) => (
        <StatsLi key={id}>
          <Item>
            <FiUser
              style={{
                color: 'green',
                position: 'absolute',
                left: 8,
                top: 11,
              }}
            />
            {name}
          </Item>
          <Item>
            <FiPhone
              style={{
                color: 'green',
                position: 'absolute',
                left: 8,
                top: 12,
              }}
            />
            {number}
          </Item>
          <Btn type="button" onClick={() => onDeleteContact(id)}>
            {idBtn === id ? <DeleteLoader /> : <FiTrash2 />}
          </Btn>
        </StatsLi>
      ))}
    </Stats>
  ) : (
    <Stats>
      <StatsLi
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: 0,
          fontSize: 20,
          fontWeight: 700,
        }}
      >
        Not found contacts
      </StatsLi>
    </Stats>
  );
};

export default ContactList;
