import IconChevronDown from '@assets/svg/IconChevronDown';
import IconChevronUp from '@assets/svg/IconChevronUp';
import React from 'react';

interface Props {
  opened: boolean;
  isAddCss: boolean;
}

function CollapseChevron({ opened, isAddCss }: Props) {
  return (
    <>
      {opened ? (
        <IconChevronUp
          strokeWidth={1.5}
          width="1rem"
          className={isAddCss ? 'ml-5' : ''}
          style={{
            ...(isAddCss && {
              rotate: '90deg',
            }),
          }}
        />
      ) : (
        <IconChevronDown strokeWidth={1.5} width="1rem" />
      )}
    </>
  );
}

export default CollapseChevron;
