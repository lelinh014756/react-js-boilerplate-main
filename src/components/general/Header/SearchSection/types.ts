import { type PopupState } from 'material-ui-popup-state/hooks';
import { type Dispatch } from 'react';

export interface MobileSearchProps {
  value: string;
  setValue: Dispatch<React.SetStateAction<string>>;
  popupState: PopupState;
}
