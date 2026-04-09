import { forwardRef, Ref, SVGProps } from 'react';

const SvgEye = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none' ref={ref} {...props}>
      <path
        d='M10.0001 4.1665C12.4788 4.1665 14.6785 5.81721 16.1946 7.36242C16.9947 8.17783 17.3948 8.58554 17.5435 9.53616C17.5783 9.75851 17.5783 10.2412 17.5435 10.4635C17.3948 11.4141 16.9947 11.8218 16.1946 12.6373C14.6785 14.1825 12.4788 15.8332 10.0001 15.8332C7.5214 15.8332 5.32167 14.1825 3.80552 12.6373C3.00544 11.8218 2.6054 11.4141 2.45669 10.4635C2.4219 10.2412 2.4219 9.75851 2.45669 9.53616C2.6054 8.58554 3.00544 8.17783 3.80552 7.36242C5.32167 5.81721 7.5214 4.1665 10.0001 4.1665Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <path
        d='M12.5 10C12.5 11.3807 11.3807 12.5 10 12.5C8.61929 12.5 7.5 11.3807 7.5 10C7.5 8.61929 8.61929 7.5 10 7.5C11.3807 7.5 12.5 8.61929 12.5 10Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgEye);
export default ForwardRef;
