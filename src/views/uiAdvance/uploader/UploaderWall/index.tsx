/* eslint-disable tailwindcss/no-custom-classname */
import { FileUploadOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { useAppSelector } from '@redux/hook';
import { borderRadius } from '@redux/selector/customizationSelector';
import createId from '@shared/utils/createId';
import React, { type HTMLProps, memo, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import { type OnDropzone } from '../type';

export interface FileItem {
  preview: string;
  id: string;
  file?: File;
}

export interface WallUploadBoxProps extends HTMLProps<HTMLInputElement> {
  onUpload?: (data: FileItem[]) => void;
  isWidth?: boolean;
}

const WallUploadBox = ({
  onUpload,
  isWidth = false,
  ...props
}: WallUploadBoxProps) => {
  const radiusStorage = useAppSelector(borderRadius);

  const onDrop: OnDropzone = useCallback((acceptedFiles) => {
    if (typeof onUpload === 'function') {
      onUpload(
        acceptedFiles.map((file) => ({
          preview: URL.createObjectURL(file),
          id: createId(),
          file,
        }))
      );
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
    },
    onDrop,
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
        <div className="contentResize flex cursor-pointer flex-col items-center justify-center ">
          <div>
            <input
              type="file"
              id="upload"
              hidden
              {...props}
              {...getInputProps()}
            />
            <FileUploadOutlined color="action" />
          </div>
          <Typography color="GrayText" sx={{ pt: '4px' }}>
            Upload
          </Typography>
        </div>
      </Box>
    </div>
  );
};

export default memo(WallUploadBox);
