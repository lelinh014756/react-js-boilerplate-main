import { type RootState } from '../store';

type State = Pick<RootState, 'customization'>;

export const customization = (state: State) => state.customization;
export const opened = (state: State) => state.customization.opened;
export const isOpen = (state: State) => state.customization.isOpen;
export const borderRadius = (state: State) => state.customization.borderRadius;
export const fontFamily = (state: State) => state.customization.fontFamily;
