import { type ChipProps } from '@mui/material';
import type React from 'react';

interface MenuItemOther {
  url?: string;
  breadcrumbs?: boolean;
  target?: boolean;
  external?: boolean;
}

export type MenuChildrenItem = MenuItem & MenuItemOther;

export interface MenuItem {
  id: string;
  title?: string;
  type: 'group' | 'item' | 'collapse';
  disabled?: boolean;
  caption?: string;
  children?: MenuChildrenItem[];
  icon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  chip?: ChipProps;
}

export interface MenuItems {
  items: MenuItem[];
}
