import { forwardRef, Ref, SVGProps } from 'react';

const SvgChevronsRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
      <path d="M7 7l5 5l-5 5" />
      <path d="M13 7l5 5l-5 5" />
    </svg>
  );
};

const ForwardRef = forwardRef(SvgChevronsRight);
export default ForwardRef;
