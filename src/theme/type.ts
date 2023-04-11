import { type Typography } from '@mui/material/styles/createTypography';
import { type CustomizationStore } from '@redux/slice/customizationSlice';

// font family
export type FontFamily = 'Inter' | 'Poppins' | 'Roboto';

export interface FontFamilyOption {
  key: FontFamily;
  label: string;
  value: string;
}
// end font family

// customization color
export interface ThemeColorCustomization {
  readonly paper: string;
  readonly darkPaper: string;

  readonly primaryLight: string;
  readonly primaryMain: string;
  readonly primaryDark: string;
  readonly primary200: string;
  readonly primary800: string;

  readonly secondaryLight: string;
  readonly secondaryMain: string;
  readonly secondaryDark: string;
  readonly secondary200: string;
  readonly secondary800: string;

  readonly successLight: string;
  readonly success200: string;
  readonly successMain: string;
  readonly successDark: string;

  readonly errorLight: string;
  readonly errorMain: string;
  readonly errorDark: string;

  readonly orangeLight: string;
  readonly orangeMain: string;
  readonly orangeDark: string;

  readonly warningLight: string;
  readonly warningMain: string;
  readonly warningDark: string;

  readonly grey50: string;
  readonly grey100: string;
  readonly grey200: string;
  readonly grey300: string;
  readonly grey400: string;
  readonly grey500: string;
  readonly grey600: string;
  readonly grey700: string;
  readonly grey900: string;

  readonly darkTextTitle: string;
  readonly darkTextPrimary: string;
  readonly darkTextSecondary: string;

  readonly darkLevel1: string;
  readonly darkLevel2: string;

  readonly darkBackground: string;

  readonly darkPrimaryLight: string;
  readonly darkPrimaryMain: string;
  readonly darkPrimaryDark: string;
  readonly darkPrimary200: string;
  readonly darkPrimary800: string;

  readonly darkSecondaryLight: string;
  readonly darkSecondaryMain: string;
  readonly darkSecondaryDark: string;
  readonly darkSecondary200: string;
  readonly darkSecondary800: string;

  readonly whiteHightLight800: string;

  readonly blackHightLight450: string;
}
// end customization color

// customization palette
export interface PaletteOptionsCustomization {
  mode: 'dark' | 'light';
  common: {
    black: string;
    main: string;
  };
  primary: {
    light: string;
    main: string;
    dark: string;
    200: string;
    800: string;
  };
  secondary: {
    light: string;
    main: string;
    dark: string;
    200: string;
    800: string;
  };
  success: {
    light: string;
    main: string;
    dark: string;
    200: string;
  };
  warning: {
    light: string;
    main: string;
    dark: string;
  };
  error: {
    light: string;
    main: string;
    dark: string;
  };
  orange: {
    light: string;
    main: string;
    dark: string;
  };
  grey: {
    50: string;
    100: string;
    500: string;
    600: string;
    700: string;
    900: string;
  };
  dark: {
    light: string;
    main: string;
    dark: string;
    800: string;
    900: string;
  };
  text: {
    primary: string;
    secondary: string;
    hint: string;
    dark: string;
  };
  hightLight: {
    white: {
      800: string;
    };
    black: {
      450: string;
    };
  };
  background: {
    paper: string;
    default: string;
  };
}
// end customization palette

// customization typography
export interface TypographyOptionsCustomization extends Typography {
  customInput: {
    marginTop: number;
    marginBottom: number;
    '& > label': {
      top: number;
      left: number;
      color: string;
      '&[data-shrink="false"]': {
        top: number;
      };
    };
    '& > div > input': {
      padding: string;
    };
    '& legend': {
      display: string;
    };
    '& fieldset': {
      top: number;
    };
  };
  mainContent: {
    backgroundColor: string;
    width: string;
    minHeight: string;
    flexGrow: number;
    padding: string;
    marginTop: string;
    marginRight: string;
    borderRadius: string;
    overflow: string;
  };
  menuCaption: {
    fontSize: string;
    fontWeight: number;
    color: string;
    padding: string;
    textTransform: string;
    marginTop: string;
  };
  subMenuCaption: {
    fontSize: string;
    fontWeight: number;
    color: string;
    textTransform: string;
  };
  commonAvatar: {
    cursor: string;
    borderRadius: string;
  };
  smallAvatar: {
    width: string;
    height: string;
    fontSize: string;
  };
  mediumAvatar: {
    width: string;
    height: string;
    fontSize: string;
  };
  largeAvatar: {
    width: string;
    height: string;
    fontSize: string;
  };
}

export type TypographyCustomization = Pick<
  TypographyOptionsCustomization,
  | 'fontFamily'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'caption'
  | 'body1'
  | 'body2'
  | 'button'
  | 'customInput'
  | 'mainContent'
  | 'menuCaption'
  | 'subMenuCaption'
  | 'commonAvatar'
  | 'smallAvatar'
  | 'mediumAvatar'
  | 'largeAvatar'
>;
// end customization typography

export interface ThemeOptionCustom {
  colors: ThemeColorCustomization;
  heading: string;
  paper: string;
  backgroundDefault: string;
  background: string;
  darkTextPrimary: string;
  darkTextSecondary: string;
  textDark: string;
  menuSelected: string;
  menuSelectedBack: string;
  divider: string;
  customization: CustomizationStore;
}
