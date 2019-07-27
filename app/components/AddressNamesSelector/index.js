import React from 'react';
import AsyncSelect from 'react-select/async';
import makeAnimated from 'react-select/animated';
import PropTypes from 'prop-types';
import { getUnique } from 'utils';
import { AddressesApi as api } from '../../api';

const animatedComponents = makeAnimated();

// eslint-disable-next-line arrow-body-style
const loadOptions = inputValue => {
  return api.getAddressNames({ q: inputValue }).then(response =>{
    const suggestions = response.data.map(({ attributes }) => ({
      label: attributes.name,
      value: attributes.alias_name,
    }));

    return getUnique(suggestions, 'value');
  });
};

const AddressNamesSelector = ({
  customStyles,
  defaultValue,
  options,
  handleSelectChange,
}) => (
  <AsyncSelect
    components={animatedComponents}
    cacheOptions
    loadOptions={loadOptions}
    defaultOptions={options}
    isMulti
    onChange={handleSelectChange}
    styles={customStyles}
    defaultValue={defaultValue}
  />
);

AddressNamesSelector.propTypes = {
  customStyles: PropTypes.object.isRequired,
  defaultValue: PropTypes.array,
  options: PropTypes.array.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
};

export default AddressNamesSelector;
