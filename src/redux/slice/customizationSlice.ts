import { type OpenedStore, type OpenIdStore } from '@redux/type';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import config, { type ConfigType } from '@shared/config';

export type CustomizationStore = Pick<
  ConfigType,
  'fontFamily' | 'borderRadius'
> & {
  isOpen: OpenIdStore[];
  opened: OpenedStore;
  modeType: 'light' | 'dark';
};

export const initialState: CustomizationStore = {
  isOpen: [], // for active default menu
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  opened: true,
  modeType: 'light',
};

export const customizationSlice = createSlice({
  name: '@customization',
  initialState,
  reducers: {
    menuOpen: (state, action: PayloadAction<OpenIdStore>) => {
      state.isOpen = [action.payload];
    },
    setMenu: (state, action: PayloadAction<OpenedStore>) => {
      state.opened = action.payload;
    },
    setFontFamily: (state, action: PayloadAction<string>) => {
      state.fontFamily = action.payload;
    },
    setBorderRadius: (state, action: PayloadAction<number>) => {
      state.borderRadius = action.payload;
    },
  },
});

export const { reducer, actions } = customizationSlice;
export const { menuOpen, setBorderRadius, setFontFamily, setMenu } = actions;
export default reducer;
