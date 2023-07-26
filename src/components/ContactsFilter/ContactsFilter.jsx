import { FilterLabel, FilterInput } from './ContactsFilter.styled';

export const ContactsFilter = ({ value, handleChange }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        value={value}
        onChange={({ target: { value } }) => handleChange(value)}
      />
    </FilterLabel>
  );
};
