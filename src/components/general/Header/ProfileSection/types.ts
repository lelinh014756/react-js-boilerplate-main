import type { MouseEvent, ReactNode } from 'react';
import { type IconProps } from 'types/coreType';

export type Event = MouseEvent<HTMLDivElement, globalThis.MouseEvent>;

export interface ProfileMenuItem {
  key: 'account_setting' | 'social_profile' | 'logout';
  title: string;
  icon: (props: IconProps) => JSX.Element;
  textComp?: ReactNode;
  action: (event: Event) => void;
}
