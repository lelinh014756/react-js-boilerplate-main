import { Autocomplete, TextField } from '@mui/material';
import React from 'react';

import { type SelectItem } from '../type';

export type ChangeFn = (
  e: React.SyntheticEvent<Element, Event>,
  obj: SelectItem[]
) => void;

export interface MultipleOptionsProps {
  options: SelectItem[];
  isFilter?: boolean;
  id?: string;
  placeholder?: string;
  label?: string;
  onChange?: ChangeFn;
}

const MultipleOptions = ({
  options,
  id,
  isFilter = true,
  placeholder,
  label,
  onChange,
}: MultipleOptionsProps) => {
  const handleChange = (
    e: React.SyntheticEvent<Element, Event>,
    obj: SelectItem[]
  ) => {
    if (typeof onChange === 'function') {
      onChange(e, obj);
    }
    console.log(obj);
  };

  return (
    <Autocomplete
      multiple
      id={id}
      options={options}
      getOptionLabel={(option) => option.label}
      limitTags={2}
      filterSelectedOptions={isFilter}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField {...params} label={label} placeholder={placeholder} />
      )}
      //   renderOption={(props, option, { selected }) => (
      //     <MenuItem
      //       {...props}
      //       key={option.value}
      //       value={option.value}
      //       sx={{ justifyContent: 'space-between' }}
      //     >
      //       {option.label}
      //       {selected ? <CheckIcon color="info" /> : null}
      //     </MenuItem>
      //   )}
    />
  );
};

export default MultipleOptions;
