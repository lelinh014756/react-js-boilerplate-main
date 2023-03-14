import IconSettings from '@assets/svg/IconSettings';
import SubCard from '@components/Cards/SubCard';
import AnimateButton from '@components/Extended/AnimateButton';
import {
  Drawer,
  Fab,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  Slider,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import {
  borderRadius,
  fontFamily as fontStore,
} from '@redux/selector/customizationSelector';
import {
  setBorderRadius as setRadiusStore,
  setFontFamily as setFontFamilyStore,
} from '@redux/slice/customizationSlice';
import { gridSpacing } from '@shared/constant';
import React, { memo, useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

// concat 'px'
function valueText(value: number) {
  return `${String(value)}px`;
}

// ==============================|| LIVE CUSTOMIZATION ||============================== //

function Customization() {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const radiusStore = useAppSelector(borderRadius);
  const fontFamilyStore = useAppSelector(fontStore);

  // drawer on/off
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  // state - border radius
  const [radius, setRadius] = useState(radiusStore);

  const handleBorderRadius = (_event: Event, newValue: number | number[]) => {
    setRadius(typeof newValue === 'number' ? newValue : newValue[0] ?? 0);
  };

  useEffect(() => {
    dispatch(setRadiusStore(radius));
  }, [dispatch, radius]);

  let initialFont;

  switch (fontFamilyStore) {
    case `Inter, sans-serif`:
      initialFont = 'Inter';
      break;
    case `Poppins, sans-serif`:
      initialFont = 'Poppins';
      break;
    case `Roboto, sans-serif`:
    default:
      initialFont = 'Roboto';
      break;
  }

  // state - font family
  const [fontFamily, setFontFamily] = useState(initialFont);

  useEffect(() => {
    let newFont;
    switch (fontFamily) {
      case 'Inter':
        newFont = `Inter, sans-serif`;
        break;
      case 'Poppins':
        newFont = `Poppins, sans-serif`;
        break;
      case 'Roboto':
      default:
        newFont = `Roboto, sans-serif`;
        break;
    }
    dispatch(setFontFamilyStore(newFont));
  }, [dispatch, fontFamily]);

  return (
    <>
      {/* toggle button */}
      <Tooltip title="Live Customize">
        <Fab
          component="div"
          onClick={handleToggle}
          size="medium"
          variant="circular"
          color="secondary"
          sx={{
            borderRadius: 0,
            borderTopLeftRadius: '50%',
            borderBottomLeftRadius: '50%',
            borderTopRightRadius: '50%',
            borderBottomRightRadius: '4px',
            top: '25%',
            position: 'fixed',
            right: 10,
            zIndex: theme.zIndex.speedDial,
          }}
        >
          <AnimateButton type="rotate">
            <IconButton color="inherit" size="large" disableRipple>
              <IconSettings />
            </IconButton>
          </AnimateButton>
        </Fab>
      </Tooltip>

      <Drawer
        anchor="right"
        onClose={handleToggle}
        open={open}
        PaperProps={{
          sx: {
            width: 280,
          },
        }}
      >
        <PerfectScrollbar component="div">
          <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
            <Grid item xs={12}>
              {/* font family */}
              <SubCard title="Font Family">
                <FormControl>
                  <RadioGroup
                    aria-label="font-family"
                    value={fontFamily}
                    onChange={(e) => {
                      setFontFamily(e.target.value);
                    }}
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Roboto"
                      control={<Radio />}
                      label="Roboto"
                      sx={{
                        '& .MuiSvgIcon-root': { fontSize: 28 },
                        '& .MuiFormControlLabel-label': {
                          color: theme.palette.grey[900],
                        },
                      }}
                    />
                    <FormControlLabel
                      value="Poppins"
                      control={<Radio />}
                      label="Poppins"
                      sx={{
                        '& .MuiSvgIcon-root': { fontSize: 28 },
                        '& .MuiFormControlLabel-label': {
                          color: theme.palette.grey[900],
                        },
                      }}
                    />
                    <FormControlLabel
                      value="Inter"
                      control={<Radio />}
                      label="Inter"
                      sx={{
                        '& .MuiSvgIcon-root': { fontSize: 28 },
                        '& .MuiFormControlLabel-label': {
                          color: theme.palette.grey[900],
                        },
                      }}
                    />
                  </RadioGroup>
                </FormControl>
              </SubCard>
            </Grid>
            <Grid item xs={12}>
              {/* border radius */}
              <SubCard title="Border Radius">
                <Grid
                  item
                  xs={12}
                  container
                  spacing={2}
                  alignItems="center"
                  sx={{ mt: 2.5 }}
                >
                  <Grid item>
                    <Typography variant="h6" color="secondary">
                      4px
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Slider
                      size="small"
                      value={radius}
                      onChange={handleBorderRadius}
                      getAriaValueText={valueText}
                      valueLabelDisplay="on"
                      aria-labelledby="discrete-slider-small-steps"
                      marks
                      step={2}
                      min={4}
                      max={24}
                      color="secondary"
                      sx={{
                        '& .MuiSlider-valueLabel': {
                          color: 'secondary.light',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" color="secondary">
                      24px
                    </Typography>
                  </Grid>
                </Grid>
              </SubCard>
            </Grid>
          </Grid>
        </PerfectScrollbar>
      </Drawer>
    </>
  );
}

export default memo(Customization);
