import { forwardRef, Ref, SVGProps } from 'react';

const SvgArrowRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" ref={ref} {...props}>
      <path
        d="M7 12H17M17 12L13 8M17 12L13 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgArrowRight);
export default ForwardRef;
