import IconAdjustmentsHorizontal from '@assets/svg/IconAdjustmentsHorizontal';
import IconSearch from '@assets/svg/IconSearch';
import Transitions from '@components/Extended/Transitions';
import {
  Box,
  ButtonBase,
  Card,
  Grid,
  InputAdornment,
  Popper,
} from '@mui/material';
// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { shouldForwardProp } from '@mui/system';
import PopupState, { bindPopper, bindToggle } from 'material-ui-popup-state';
import { memo, useState } from 'react';

import MobileSearch from './MobileSearch';
import { HeaderAvatarStyle, OutlineInputStyle } from './styled';

// styles
const PopperStyle = styled(Popper, { shouldForwardProp })(({ theme }) => ({
  zIndex: 1100,
  width: '100%',
  top: '-55px !important',
  padding: '0 12px',
  [theme.breakpoints.down('sm')]: {
    top: '-50px !important',
    padding: '0',
  },
}));

// ==============================|| SEARCH INPUT ||============================== //

const SearchSection = () => {
  const theme = useTheme();
  const [value, setValue] = useState('');

  return (
    <>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <PopupState variant="popper" popupId="demo-popup-popper">
          {(popupState) => (
            <>
              <Box sx={{ ml: 2 }}>
                <ButtonBase sx={{ borderRadius: '12px' }}>
                  <HeaderAvatarStyle
                    variant="rounded"
                    {...bindToggle(popupState)}
                  >
                    <IconSearch strokeWidth={1.5} width="1.2rem" />
                  </HeaderAvatarStyle>
                </ButtonBase>
              </Box>
              <PopperStyle {...bindPopper(popupState)} transition>
                {({ TransitionProps }) => (
                  <>
                    <Transitions
                      type="zoom"
                      {...TransitionProps}
                      sx={{ transformOrigin: 'center left' }}
                    >
                      <Card
                        sx={{
                          background: '#fff',
                          [theme.breakpoints.down('sm')]: {
                            border: 0,
                            boxShadow: 'none',
                          },
                        }}
                      >
                        <Box
                          sx={{
                            p: 2,
                            [theme.breakpoints.down('md')]: {
                              p: 1,
                            },
                          }}
                        >
                          <Grid
                            container
                            alignItems="center"
                            justifyContent="space-between"
                          >
                            <Grid item xs>
                              <MobileSearch
                                value={value}
                                setValue={setValue}
                                popupState={popupState}
                              />
                            </Grid>
                          </Grid>
                        </Box>
                      </Card>
                    </Transitions>
                  </>
                )}
              </PopperStyle>
            </>
          )}
        </PopupState>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
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
            </InputAdornment>
          }
          aria-describedby="search-helper-text"
          inputProps={{ 'aria-label': 'weight' }}
        />
      </Box>
    </>
  );
};

export default memo(SearchSection);
