import validArray from '@shared/utils/validArray';
import ImgCardWall from '@views/uiAdvance/media/ImgCard/ImgCardWall';
import ImgListWall from '@views/uiAdvance/media/ImgList/ImgListWall';
import React, { useCallback, useState } from 'react';

import WallUploadBox, { type FileItem } from '.';

const UploaderWallView = () => {
  const [files, setFiles] = useState<FileItem[]>([]);

  const onUpload = useCallback((data: FileItem[]) => {
    setFiles(data);
  }, []);

  const onDelete = useCallback((id: string) => {
    console.log(id);
  }, []);

  return (
    <div>
      <ImgListWall>
        <WallUploadBox onUpload={onUpload} />

        {validArray(files) &&
          files.map((file) => (
            <ImgCardWall
              key={file.id}
              image={file.preview}
              id={file.id}
              onDelete={onDelete}
            />
          ))}
      </ImgListWall>
    </div>
  );
};

export default UploaderWallView;
