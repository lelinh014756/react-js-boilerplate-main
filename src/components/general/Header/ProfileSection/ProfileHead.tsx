import SearchInput from '@components/Input/SearchInput';
import { Box, Divider, Stack, Typography } from '@mui/material';
import React, { memo, useState } from 'react';

const ProfileHead = () => {
  const [value, setValue] = useState('');

  return (
    <Box sx={{ p: 2, pb: 0 }}>
      <Stack>
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography variant="h4">Good Morning,</Typography>
          <Typography component="span" variant="h4" sx={{ fontWeight: 400 }}>
            Johne Doe
          </Typography>
        </Stack>
        <Typography variant="subtitle2">Project Admin</Typography>
      </Stack>
      <SearchInput
        id="input-search-profile"
        value={value}
        placeholder="Search profile options"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <Divider />
    </Box>
  );
};

export default memo(ProfileHead);
