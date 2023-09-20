import { useState, useEffect } from 'react';
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi'

const SearchBox = (props) => {
  const [value, _setValue] = useState("");
  useEffect(() => {
    _setValue("");
  }, [props.resetValue]);

  useEffect(() => {
    if (props.handleChange) {
      props.handleChange(props.name, value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  const handleChange = (e) => {
    _setValue(e.target.value);
  }

  return <InputGroup position="sticky" top="16px" zIndex="3" mb="1rem">
    <InputLeftElement pointerEvents='none'>
      <FiSearch color='#fff' />
    </InputLeftElement>
    <Input type='text' placeholder='Search Here...' variant="search" onChange={handleChange} value={value} />
  </InputGroup>
}

export default SearchBox;