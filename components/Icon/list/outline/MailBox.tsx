import { forwardRef, Ref, SVGProps } from 'react';

const SvgMailBox = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='21' viewBox='0 0 20 21' fill='none' ref={ref} {...props}>
      <path
        d='M10 12.1668H15.7C16.4499 12.1668 16.8249 12.1668 17.0878 11.9758C17.1727 11.9142 17.2473 11.8395 17.309 11.7546C17.5 11.4917 17.5 11.1168 17.5 10.3668V9.2335C17.5 6.98366 17.5 5.85874 16.9271 5.07014C16.742 4.81546 16.518 4.59148 16.2634 4.40645C15.4748 3.8335 14.3498 3.8335 12.1 3.8335H9.16667C6.67436 3.8335 5.4282 3.8335 4.5 4.36939C3.89192 4.72047 3.38697 5.22542 3.0359 5.8335C2.5 6.7617 2.5 8.00785 2.5 10.5002V10.5002C2.5 11.1232 2.5 11.4348 2.63397 11.6668C2.72174 11.8188 2.84798 11.9451 3 12.0329C3.23205 12.1668 3.54359 12.1668 4.16667 12.1668H10ZM10 12.1668V16.7502C10 17.4405 10.5596 18.0002 11.25 18.0002V18.0002C11.9404 18.0002 12.5 17.4405 12.5 16.7502V12.1668'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5 7.1665L7.5 7.1665'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 12.1668V7.5835C10 5.51243 8.32107 3.8335 6.25 3.8335C4.17893 3.8335 2.5 5.51243 2.5 7.5835V10.7779C2.5 11.1398 2.5 11.3207 2.54628 11.4675C2.64439 11.7787 2.88813 12.0224 3.19929 12.1205C3.34609 12.1668 3.52702 12.1668 3.88889 12.1668H10Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMailBox);
export default ForwardRef;
