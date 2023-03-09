import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { getFilter } from 'redux/filter/filterSelectors';
import { Block } from './Filter.styled';
import TextField from '@mui/material/TextField';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <Block>
      <div
        style={{
          maxWidth: 320,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <TextField
          type="text"
          name="filter"
          fullWidth
          label="Find contacts by name"
          value={value}
          onChange={e => dispatch(setFilter(e.target.value))}
          id="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
    </Block>
  );
};

export default Filter;
