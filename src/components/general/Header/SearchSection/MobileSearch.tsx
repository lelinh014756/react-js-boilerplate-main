// ==============================|| SEARCH INPUT - MOBILE||============================== //

import IconAdjustmentsHorizontal from '@assets/svg/IconAdjustmentsHorizontal';
import IconSearch from '@assets/svg/IconSearch';
import IconX from '@assets/svg/IconX';
import { Avatar, Box, ButtonBase, InputAdornment } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { bindToggle } from 'material-ui-popup-state';

import { HeaderAvatarStyle, OutlineInputStyle } from './styled';
import type { MobileSearchProps } from './types';

const MobileSearch = ({ value, setValue, popupState }: MobileSearchProps) => {
  const theme = useTheme();

  return (
    <OutlineInputStyle
      id="input-search-header"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      placeholder="Search"
      startAdornment={
        <InputAdornment position="start">
          <IconSearch
            strokeWidth={1.5}
            width="1rem"
            color={theme.palette.grey[500]}
          />
        </InputAdornment>
      }
      endAdornment={
        <InputAdornment position="end">
          <ButtonBase sx={{ borderRadius: '12px' }}>
            <HeaderAvatarStyle variant="rounded">
              <IconAdjustmentsHorizontal strokeWidth={1.5} width="1.3rem" />
            </HeaderAvatarStyle>
          </ButtonBase>
          <Box sx={{ ml: 2 }}>
            <ButtonBase sx={{ borderRadius: '12px' }}>
              <Avatar
                variant="rounded"
                sx={{
                  ...theme.typography.commonAvatar,
                  ...theme.typography.mediumAvatar,
                  background: theme.palette.orange.light,
                  color: theme.palette.orange.dark,
                  '&:hover': {
                    background: theme.palette.orange.dark,
                    color: theme.palette.orange.light,
                  },
                }}
                {...bindToggle(popupState)}
              >
                <IconX strokeWidth={1.5} width="1.3rem" />
              </Avatar>
            </ButtonBase>
          </Box>
        </InputAdornment>
      }
      aria-describedby="search-helper-text"
      inputProps={{ 'aria-label': 'weight' }}
    />
  );
};

export default MobileSearch;
