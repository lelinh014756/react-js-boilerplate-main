import type { ReactNode } from 'react';

export type NotifyTypes = 'normal' | 'store' | 'mail' | 'upload' | 'status';

export interface NotifyFilesUpload {
  title: string;
  url: string;
  type: 'image' | 'other';
  date: string;
}

export interface NotifyData {
  title: string;
  time: string;
  desc: string;
  refType: NotifyTypes;
  files?: NotifyFilesUpload;
  status?: {
    refType: 'activated';
    text: string;
  };
  avatarUrl?: string;
}

export type NotifyController = {
  [key in NotifyTypes]: {
    avatarComp?: ReactNode;
    component: ReactNode;
    action: () => void;
  };
};
