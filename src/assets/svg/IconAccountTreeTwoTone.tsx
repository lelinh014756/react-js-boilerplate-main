import React from 'react';
import { type IconProps } from 'types/coreType';

function IconAccountTreeTwoTone(props: IconProps) {
  return (
    <svg
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="AccountTreeTwoToneIcon"
      tabIndex={-1}
      {...props}
    >
      <path d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3h7zM7 9H4V5h3v4zm10 6h3v4h-3v-4zm0-10h3v4h-3V5z"></path>
      <path d="M7 5v4H4V5h3m13 0v4h-3V5h3m0 10v4h-3v-4h3" opacity=".3"></path>
    </svg>
  );
}

export default IconAccountTreeTwoTone;
