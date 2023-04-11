import IconSettings from '@assets/svg/IconSettings';
import AnimateButton from '@components/Extended/AnimateButton';
import { Fab, IconButton, Tooltip } from '@mui/material';

interface Props {
  handleToggle: () => void;
}

const BtnCustom = ({ handleToggle }: Props) => {
  return (
    <Tooltip title="Live Customize">
      <Fab
        component="div"
        onClick={handleToggle}
        size="medium"
        variant="circular"
        color="secondary"
        sx={(theme) => ({
          borderRadius: 0,
          borderTopLeftRadius: '50%',
          borderBottomLeftRadius: '50%',
          borderTopRightRadius: '50%',
          borderBottomRightRadius: '4px',
          top: '25%',
          position: 'fixed',
          right: 10,
          zIndex: theme.zIndex.speedDial,
        })}
      >
        <AnimateButton type="rotate">
          <IconButton color="inherit" size="large" disableRipple>
            <IconSettings />
          </IconButton>
        </AnimateButton>
      </Fab>
    </Tooltip>
  );
};

export default BtnCustom;
