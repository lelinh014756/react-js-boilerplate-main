/* eslint-disable @typescript-eslint/no-explicit-any */
import { Cancel as CancelIcon } from '@mui/icons-material';
import {
  Chip,
  FormControl,
  InputLabel,
  type InputLabelProps,
  MenuItem,
  Select,
  type SelectProps,
  Stack,
} from '@mui/material';
import { type SelectChangeEvent } from '@mui/material/Select';
import React, { useState } from 'react';

import { type SelectItem } from '../type';

interface SelectControlProps
  extends Omit<SelectProps, 'onChange' | 'value' | 'renderValue' | 'multiple'> {
  data: SelectItem[];
  inputLabelProps?: InputLabelProps;
}

const SelectChip = ({
  data,
  inputLabelProps,
  label = 'Choose option',
  ...props
}: SelectControlProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<any>) => {
    const value = event.target.value as string[];

    setSelected(value);
  };

  const handleDelete = (val: string) => {
    // const dataRemaining = selected.filter((item) => {
    //   const optionData = JSON.parse(item) as SelectItem;

    //   return optionData.value !== val.value;
    // });

    setSelected(selected.filter((slt) => slt !== val));
  };

  return (
    <FormControl fullWidth>
      <InputLabel {...inputLabelProps}>{label}</InputLabel>
      <Select
        multiple
        value={selected}
        onChange={handleChange}
        label={label}
        renderValue={(sltValues: any) => (
          <Stack gap={1} direction="row" flexWrap="wrap">
            {sltValues.map((sltItem: string) => {
              const item = JSON.parse(sltItem) as SelectItem;

              return (
                <Chip
                  key={item.value}
                  label={item.label}
                  onClick={(e) => {
                    console.log('click');

                    e.stopPropagation();
                  }}
                  onDelete={() => {
                    handleDelete(sltItem);
                  }}
                  deleteIcon={
                    <CancelIcon
                      onMouseDown={(e) => {
                        e.stopPropagation();
                      }}
                    />
                  }
                />
              );
            })}
          </Stack>
        )}
        {...props}
      >
        {data.map((item) => (
          <MenuItem key={item.value} value={JSON.stringify(item)}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectChip;
