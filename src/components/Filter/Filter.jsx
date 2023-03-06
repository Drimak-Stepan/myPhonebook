import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { getFilter } from 'redux/filter/filterSelectors';
import { Block, Label, Input } from './Filter.styled';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <Block>
      <div>
        <Label htmlFor="filterId">Find contacts by name</Label>
        <div>
          <Input
            type="text"
            name="filter"
            value={value}
            onChange={e => dispatch(setFilter(e.target.value))}
            id="filterId"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
      </div>
    </Block>
  );
};

export default Filter;
