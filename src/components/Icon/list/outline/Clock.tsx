import { forwardRef, Ref, SVGProps } from 'react';

const SvgClock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='21' viewBox='0 0 20 21' fill='none' ref={ref} {...props}>
      <path
        d='M10 18C14.1421 18 17.5 14.6421 17.5 10.5C17.5 6.35786 14.1421 3 10 3C5.85786 3 2.5 6.35786 2.5 10.5C2.5 14.6421 5.85786 18 10 18Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.0297 9.7911L13.75 9.7911C14.1642 9.7911 14.5 10.1269 14.5 10.5411C14.5 10.9553 14.1642 11.2911 13.75 11.2911L10.9679 11.2911C10.7386 11.5712 10.3902 11.75 10 11.75C9.30964 11.75 8.75 11.1904 8.75 10.5C8.75 10.091 8.94639 9.72796 9.25 9.49991L9.25 5.95776C9.25 5.54355 9.58579 5.20776 10 5.20776C10.4142 5.20776 10.75 5.54355 10.75 5.95776L10.75 9.49991C10.8582 9.58117 10.9528 9.67958 11.0297 9.7911Z'
        fill='currentColor'
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgClock);
export default ForwardRef;
