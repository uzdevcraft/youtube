import { forwardRef, Ref, SVGProps } from 'react';

const SvgEnvelope = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='21' viewBox='0 0 20 21' fill='none' ref={ref} {...props}>
      <path
        d='M2.5 9.65C2.5 7.40016 2.5 6.27524 3.07295 5.48664C3.25799 5.23196 3.48196 5.00799 3.73664 4.82295C4.52524 4.25 5.65016 4.25 7.9 4.25H12.1C14.3498 4.25 15.4748 4.25 16.2634 4.82295C16.518 5.00799 16.742 5.23196 16.9271 5.48664C17.5 6.27524 17.5 7.40016 17.5 9.65V11.35C17.5 13.5998 17.5 14.7248 16.9271 15.5134C16.742 15.768 16.518 15.992 16.2634 16.1771C15.4748 16.75 14.3498 16.75 12.1 16.75H7.9C5.65016 16.75 4.52524 16.75 3.73664 16.1771C3.48196 15.992 3.25799 15.768 3.07295 15.5134C2.5 14.7248 2.5 13.5998 2.5 11.35V9.65Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <path
        d='M2.5 7.1665L4.47479 8.70238C6.82441 10.5298 7.99922 11.4435 9.3412 11.6219C9.77869 11.6801 10.222 11.6801 10.6594 11.6219C12.0014 11.4434 13.1762 10.5296 15.5257 8.70213L17.5 7.1665'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgEnvelope);
export default ForwardRef;
