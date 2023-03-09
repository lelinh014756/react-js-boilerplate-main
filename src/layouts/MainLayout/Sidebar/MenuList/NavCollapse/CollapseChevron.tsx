import IconChevronDown from '@assets/svg/IconChevronDown';
import IconChevronUp from '@assets/svg/IconChevronUp';
import React from 'react';

interface Props {
  opened: boolean;
  isAddCss: boolean;
}

function CollapseChevron({ opened, isAddCss }: Props) {
  return (
    <div className={isAddCss ? 'ml-5' : ''}>
      {opened ? (
        <IconChevronUp
          strokeWidth={1.5}
          width="1rem"
          style={{
            marginTop: 'auto',
            marginBottom: 'auto',
            ...(isAddCss && {
              rotate: '90deg',
            }),
          }}
        />
      ) : (
        <IconChevronDown strokeWidth={1.5} width="1rem" />
      )}
    </div>
  );
}

export default CollapseChevron;
