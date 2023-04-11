import {
  type CardContentProps,
  type CardHeaderProps,
  type CardProps,
  type SxProps,
  type Theme,
} from '@mui/material';
import { type Variant } from '@mui/material/styles/createTypography';

// cards
export interface MainCardProps extends CardProps {
  border?: boolean;
  boxShadow?: boolean;
  shadow?: string;
  content?: boolean;
  contentClass?: CardContentProps['className'];
  headerSX?: CardHeaderProps['sx'];
  contentSX?: CardContentProps['sx'];
  customTitle?: boolean;
  customTitleSx?: SxProps<Theme>;
  customTitleVariant?: Variant;
  secondary?: React.ReactNode;
}

export interface SubCardProps extends CardProps {
  content?: boolean;
  contentSX?: CardContentProps['sx'];
  contentClass?: CardContentProps['className'];
  darkTitle?: boolean;
  secondary?: React.ReactNode;
}
// end cards
