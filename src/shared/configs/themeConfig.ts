import { type FontFamilyOption } from 'src/theme/type';

export interface ThemeConfig {
  toolbarHeightSm: number;
  toolbarHeightLg: number;
  fontFamily: string;
  borderRadius: number;
}

export const fontList: FontFamilyOption[] = [
  {
    key: 'Roboto',
    label: 'Roboto',
    value: `'Roboto', sans-serif`,
  },
  {
    key: 'Poppins',
    label: 'Poppins',
    value: `'Poppins', sans-serif`,
  },
  {
    key: 'Inter',
    label: 'Inter',
    value: `'Inter', sans-serif`,
  },
];

const themeConfig: ThemeConfig = {
  // ** Toolbar (Header) Configs
  toolbarHeightSm: 64,
  toolbarHeightLg: 84,

  // ** Other Configs
  fontFamily: fontList[2]?.value ?? '',
  borderRadius: 8,
};

export default themeConfig;
