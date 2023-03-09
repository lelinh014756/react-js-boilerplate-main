import React from 'react';

function IconPhoto(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M15 8l.01 0"></path>
      <path d="M4 4m0 3a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3z"></path>
      <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5"></path>
      <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2"></path>
    </svg>
  );
}

export default IconPhoto;
