import {
  type PaletteOptionsCustomization,
  type TypographyOptionsCustomization,
} from './theme/type';

type CustomPalette = {
  [Key in keyof typeof PaletteOptionsCustomization]: (typeof PaletteOptionsCustomization)[Key];
};

declare module '@mui/material/styles' {
  interface Theme {
    palette: PaletteOptionsCustomization;
    typography: TypographyOptionsCustomization;
  }
}
