import { type SxProps } from '@mui/material';
import { type TransitionProps } from '@mui/material/transitions';
import { type Theme } from '@mui/system';

/* ================ || extended || ================ */
export type TransitionsType = 'grow' | 'collapse' | 'fade' | 'slide' | 'zoom';

export interface TransitionPropsCustom extends TransitionProps {
  position?:
    | 'top'
    | 'top-right'
    | 'top-left'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right';
  type?: TransitionsType;
  sx?: SxProps<Theme>;
  direction?: 'left' | 'right' | 'up' | 'down';
}
