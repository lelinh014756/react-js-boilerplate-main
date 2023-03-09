/* eslint-disable tailwindcss/no-custom-classname */
import './styles/global.css';
import './styles/sass/index.scss';

import NavigationScroll from '@layouts/NavigationScroll';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useAppSelector } from '@redux/hook';

import Routes from './routes';
import theme from './theme/index';

const App = () => {
  const customization = useAppSelector((state) => state.customization);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
