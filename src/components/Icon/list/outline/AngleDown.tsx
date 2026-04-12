import { forwardRef, Ref, SVGProps } from 'react';

const SvgAngleDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' ref={ref} {...props}>
      <path d='M16 10L12 14L8 10' stroke='#10101A' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAngleDown);
export default ForwardRef;
