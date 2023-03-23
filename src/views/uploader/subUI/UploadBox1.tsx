import { CloudUpload } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import createId from '@shared/utils/createId';
import React, { type HTMLProps, memo, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import { type FileItem, type OnDropzone } from '../type';

export interface UploadBox1Props extends HTMLProps<HTMLInputElement> {
  onUpload?: (data: FileItem[]) => void;
}

const UploadBox1 = ({ onUpload, ...props }: UploadBox1Props) => {
  const onDrop: OnDropzone = useCallback((acceptedFiles) => {
    if (typeof onUpload === 'function') {
      onUpload(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
            id: createId(),
          })
        )
      );
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
    },
    onDrop,
  });

  return (
    <Box
      display="flex"
      gap="8px"
      alignItems="center"
      justifyContent="center"
      sx={{ cursor: 'pointer', mb: '24px', p: '30px 0', flexWrap: 'wrap' }}
      {...getRootProps({ className: 'dropzone' })}
    >
      <div>
        <input type="file" id="upload" hidden {...props} {...getInputProps()} />
        <CloudUpload color="action" />
      </div>
      <Typography color="darkgrey">Drop file here to upload</Typography>
    </Box>
  );
};

export default memo(UploadBox1);
