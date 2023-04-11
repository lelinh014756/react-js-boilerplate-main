/* eslint-disable tailwindcss/no-custom-classname */
import './styles/global.css';
import './styles/sass/index.scss';

import NavigationScroll from '@layouts/NavigationScroll';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAppSelector } from '@redux/hook';

import Routes from './routes';
import overrides from './theme/overrides';
import themeOptions from './theme/themeOptions';
import typography from './theme/typography';

const App = () => {
  const customization = useAppSelector((state) => state.customization);

  const coreThemeConfig = themeOptions(customization);

  // ** Pass ThemeOptions to CreateTheme Function to create partial theme without component overrides
  let theme = createTheme(coreThemeConfig);

  // ** Continue theme creation and pass merged component overrides to CreateTheme function
  theme = createTheme({
    ...theme,
    components: { ...overrides(theme) },
    typography: { ...typography(theme) },
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
