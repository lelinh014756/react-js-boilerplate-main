import { type MenuChildrenItem } from '@modules/menu-items/type';
import { type PopupState } from 'material-ui-popup-state/hooks';
import {
  type Dispatch,
  type ForwardRefExoticComponent,
  type MouseEvent,
  type RefAttributes,
} from 'react';
import { type LinkProps } from 'react-router-dom';

// =============== || sidebar || ==============//
export interface ListItemProps {
  component: string | ForwardRefExoticComponent<RefAttributes<LinkProps>>;
  href?: string;
  target?: string;
}

export interface NavItemProps {
  item: MenuChildrenItem;
  level: number;
}

export interface NavCollapseProps {
  menu: MenuChildrenItem;
  level: number;
}

// =============== || header || ==============//
export type NotifyStatus = 'all' | 'new' | 'unread' | 'other';

export interface NotifyOption {
  value: NotifyStatus;
  label: string;
}

export type ProfileHandleCloseEvent =
  | MouseEvent
  | globalThis.TouchEvent
  | MouseEvent<HTMLDivElement, globalThis.MouseEvent>;

export interface MobileSearchProps {
  value: string;
  setValue: Dispatch<React.SetStateAction<string>>;
  popupState: PopupState;
}
