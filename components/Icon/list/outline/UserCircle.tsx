import { forwardRef, Ref, SVGProps } from 'react';

const SvgUserCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none' ref={ref} {...props}>
      <path
        d='M11.3344 10.4165H8.6658C7.46336 10.4165 6.38704 11.1624 5.96483 12.2883C5.69964 12.9955 6.22242 13.7498 6.9777 13.7498H13.0225C13.7777 13.7498 14.3005 12.9955 14.0353 12.2883C13.6131 11.1624 12.5368 10.4165 11.3344 10.4165Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <path
        d='M8.40015 6.66667C8.40015 5.74619 9.14634 5 10.0668 5C10.9873 5 11.7335 5.74619 11.7335 6.66667C11.7335 7.58714 10.9873 8.33333 10.0668 8.33333C9.14634 8.33333 8.40015 7.58714 8.40015 6.66667Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <path
        d='M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgUserCircle);
export default ForwardRef;
