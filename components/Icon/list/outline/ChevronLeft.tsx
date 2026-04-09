import { forwardRef, Ref, SVGProps } from 'react';

const SvgChevronLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props} ref={ref}>
      <path
        d="M14.5 7L9.5 12L14.5 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgChevronLeft);
export default ForwardRef;
