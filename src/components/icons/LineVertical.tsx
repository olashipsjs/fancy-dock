import type { SVGProps } from 'react';

export function LineVertical(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={256}
      height={256}
      viewBox='0 0 256 256'
      {...props}
    >
      <path
        fill='currentColor'
        d='M140 24v208a12 12 0 0 1-24 0V24a12 12 0 0 1 24 0'
      ></path>
    </svg>
  );
}
