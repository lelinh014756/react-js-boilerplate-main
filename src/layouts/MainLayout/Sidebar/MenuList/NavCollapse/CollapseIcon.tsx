import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import React from 'react';

interface Props {
  icon: ((props: React.SVGProps<SVGSVGElement>) => JSX.Element) | undefined;
  level: number;
  upMdDrawerClose: boolean;
  isSelected: boolean;
}

function CollapseIcon({ icon, level, isSelected, upMdDrawerClose }: Props) {
  const Icon = icon;

  return (
    <>
      {Icon !== undefined ? (
        <Icon
          strokeWidth={1.5}
          width={upMdDrawerClose ? '24px' : '1.3rem'}
          style={{ marginTop: 'auto', marginBottom: 'auto' }}
        />
      ) : (
        <FiberManualRecordIcon
          sx={{
            width: isSelected ? 8 : 6,
            height: isSelected ? 8 : 6,
          }}
          fontSize={level > 0 ? 'inherit' : 'medium'}
        />
      )}
    </>
  );
}

export default React.memo(CollapseIcon);
