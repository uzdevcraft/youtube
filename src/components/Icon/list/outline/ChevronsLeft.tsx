import { forwardRef, Ref, SVGProps } from 'react';

const SvgChevronsLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      ref={ref}
    >
      <path d="M11 7l-5 5l5 5" />
      <path d="M17 7l-5 5l5 5" />
    </svg>
  );
};

const ForwardRef = forwardRef(SvgChevronsLeft);
export default ForwardRef;
