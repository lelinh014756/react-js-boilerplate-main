import Logo from '@components/Logo';
// material-ui
import { ButtonBase } from '@mui/material';
import config from '@shared/config';
import { Link } from 'react-router-dom';

function LogoSection() {
  return (
    <ButtonBase disableRipple component={Link} to={config.defaultPath}>
      <Logo />
    </ButtonBase>
  );
}

export default LogoSection;
