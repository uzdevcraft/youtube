import { forwardRef, Ref, SVGProps } from 'react';

const SvgChevronRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" ref={ref} {...props}>
      <path
        d="M9.5 7L14.5 12L9.5 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgChevronRight);
export default ForwardRef;
