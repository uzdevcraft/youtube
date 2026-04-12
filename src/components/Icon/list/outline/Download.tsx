import { forwardRef, Ref, SVGProps } from 'react';

const SvgDownload = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" ref={ref} {...props}>
      <path
        d="M17.5 10.8333V10.8333C17.5 13.3256 17.5 14.5718 16.9641 15.5C16.613 16.1081 16.1081 16.613 15.5 16.9641C14.5718 17.5 13.3256 17.5 10.8333 17.5H9.16667C6.67436 17.5 5.4282 17.5 4.5 16.9641C3.89192 16.613 3.38697 16.1081 3.0359 15.5C2.5 14.5718 2.5 13.3256 2.5 10.8333V10.8333M10 2.5L10 12.5M10 12.5L12.5 10M10 12.5L7.5 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgDownload);
export default ForwardRef;
