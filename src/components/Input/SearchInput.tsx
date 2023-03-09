import IconSearch from '@assets/svg/IconSearch';
import {
  InputAdornment,
  OutlinedInput,
  type OutlinedInputProps,
  useTheme,
} from '@mui/material';
import { memo } from 'react';

interface Props extends OutlinedInputProps {
  width?: string | number;
  spacingY?: boolean;
}

function SearchInput({ width = '100%', spacingY = true, sx, ...props }: Props) {
  const theme = useTheme();

  return (
    <OutlinedInput
      sx={{ width, pr: 1, pl: 2, ...(spacingY && { my: 2 }), ...sx }}
      startAdornment={
        <InputAdornment position="start">
          <IconSearch
            strokeWidth={1.5}
            width="1rem"
            color={theme.palette.grey[500]}
          />
        </InputAdornment>
      }
      aria-describedby="search-helper-text"
      inputProps={{
        'aria-label': 'weight',
      }}
      {...props}
    />
  );
}

export default memo(SearchInput);
