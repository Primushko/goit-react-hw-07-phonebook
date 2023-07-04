import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
// import { getFilter } from 'redux/selectors';
import { Input, Label } from './Filter.styled';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  // const filter = useSelector(getFilter);
  const filter = useSelector(selectFilter);
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={filter}
        onChange={event => dispatch(setFilter(event.target.value.trim()))}
      />
    </Label>
  );
};
