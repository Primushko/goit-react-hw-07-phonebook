import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice'; // - встановлює фільтр для контактів.
import { selectFilter } from 'redux/selectors'; // -вибирає поточне значення фільтра.
import { Input, Label } from './Filter.styled';
// - компонент Filter, який відповідає за фільтрацію контактів за ім'ям.
export const Filter = () => {
  const dispatch = useDispatch();
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
