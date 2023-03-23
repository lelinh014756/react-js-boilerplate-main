import { Grid } from '@mui/material';
import validArray from '@shared/utils/validArray';
import React, { useCallback, useState } from 'react';

import ImgCard from '../subUI/ImgCard';
import UploadBox1 from '../subUI/UploadBox1';
import { type FileItem } from '../type';

const UploaderPreview = () => {
  const [files, setFiles] = useState<FileItem[]>([]);

  console.log(files);

  const onUpload = useCallback((data: FileItem[]) => {
    setFiles(data);
  }, []);

  return (
    <>
      <UploadBox1 onUpload={onUpload} />

      <Grid
        gridAutoFlow="row"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(80px, 1fr))"
        gap="10px"
        container
      >
        {validArray(files) &&
          files.map((file, index) => (
            <Grid key={index} item>
              <ImgCard image={file.preview} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default UploaderPreview;
