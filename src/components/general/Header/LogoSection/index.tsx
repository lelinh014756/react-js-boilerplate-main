import Logo from '@components/Logo/MainLogo';
// material-ui
import { ButtonBase } from '@mui/material';
import config from '@shared/configs/coreConfig';
import { Link } from 'react-router-dom';

function LogoSection() {
  return (
    <ButtonBase disableRipple component={Link} to={config.defaultPath}>
      <Logo />
    </ButtonBase>
  );
}

export default LogoSection;
