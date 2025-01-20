import type { SVGProps } from 'react';

export function ArrowLeft(props: SVGProps<SVGSVGElement>) {
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
        d='M228 128a12 12 0 0 1-12 12H69l51.52 51.51a12 12 0 0 1-17 17l-72-72a12 12 0 0 1 0-17l72-72a12 12 0 0 1 17 17L69 116h147a12 12 0 0 1 12 12'
      ></path>
    </svg>
  );
}
