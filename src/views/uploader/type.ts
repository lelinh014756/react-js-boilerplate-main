import { type DropEvent, type FileRejection } from 'react-dropzone';

export type OnDropzone = <T extends File>(
  acceptedFiles: T[],
  fileRejections: FileRejection[],
  event: DropEvent
) => void;

export interface FileItem extends File {
  preview?: string;
  id: string;
}
