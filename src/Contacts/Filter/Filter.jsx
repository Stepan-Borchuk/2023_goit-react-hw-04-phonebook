import { FilterContainer, FilterInput } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ filter, onFilter }) => {
  return (
    <FilterContainer>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onFilter}
        placeholder="enter contacts' name"
      ></FilterInput>
    </FilterContainer>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
};
