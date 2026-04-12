import { forwardRef, Ref, SVGProps } from 'react';

const SvgBars = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' ref={ref} {...props}>
      <path d='M4 12H20M4 18H20M4 6H20' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBars);
export default ForwardRef;
