import { type DirectionType } from '@core/type';
import { type CardProps } from '@mui/material';
import { type HTMLProps } from 'react';
import { type MenuItems } from 'src/modules/menu-items/type';

export interface BreadcrumbsProps extends Omit<CardProps, 'title'> {
  title?: boolean;
  titleBottom?: boolean;
  card?: boolean;
  divider?: boolean;
  icon?: boolean;
  icons?: boolean;
  maxItems?: number;
  navigation: MenuItems;
  rightAlign?: boolean;
  border?: boolean;
  separator?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

export interface AnimateButtonProps extends HTMLProps<HTMLDivElement> {
  type?: 'slide' | 'scale' | 'rotate';
  offset?: number;
  direction?: DirectionType;
  scale?: {
    hover?: number;
    tap?: number;
  };
}
