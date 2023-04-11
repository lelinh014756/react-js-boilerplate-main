/* eslint-disable tailwindcss/no-custom-classname */
import { FileUploadOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { useAppSelector } from '@redux/hook';
import { borderRadius } from '@redux/selector/customizationSelector';
import createId from '@shared/utils/createId';
import React, { useCallback } from 'react';
import { type DropzoneOptions, useDropzone } from 'react-dropzone';

import { type OnDropzone } from '../type';

export interface FileItem {
  preview: string;
  id: string;
  file?: File;
}

export interface UploaderAvatarProps extends DropzoneOptions {
  onUpload?: (data: FileItem) => void;
  isWidth?: boolean;
}

const UploaderAvatar = ({
  onUpload,
  isWidth = false,
  ...props
}: UploaderAvatarProps) => {
  const radiusStorage = useAppSelector(borderRadius);

  const onDrop: OnDropzone = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0] as File;

    if (typeof onUpload === 'function') {
      onUpload({
        preview: URL.createObjectURL(file),
        id: createId(),
        file,
      });
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
    },
    multiple: false,
    onDrop,
    ...props,
  });

  return (
    <div className={isWidth ? 'w-[100px]' : ''}>
      <Box
        sx={(theme) => ({
          border: '1px dashed grey',
          borderRadius: `${radiusStorage}px`,
          ...(isDragActive && {
            borderColor: theme.palette.primary.dark,
          }),
          '&:hover': {
            borderColor: theme.palette.primary.dark,
          },
        })}
        {...getRootProps({
          className: 'dropzone wrapImgResize imgSquare transition-all',
        })}
      >
        <div className="contentResize cursor-pointer ">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div>
              <input type="file" id="upload" hidden {...getInputProps()} />
              <FileUploadOutlined color="action" />
            </div>
            <Typography color="GrayText" sx={{ pt: '4px' }}>
              Upload
            </Typography>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default UploaderAvatar;
