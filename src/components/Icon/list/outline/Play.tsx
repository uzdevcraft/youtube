import { forwardRef, Ref, SVGProps } from 'react';

const SvgPlay = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" ref={ref} {...props}>
      <path d="M8 6V18M16 6V18" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPlay);
export default ForwardRef;
