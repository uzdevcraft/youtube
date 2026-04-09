import { forwardRef, Ref, SVGProps } from "react";

const SvgShorts = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path
        d="M17.77 10.32l-1.2-.5L18 9l.5-1.2.5 1.2 1.2.5-1.2.5-.5 1.2-.5-1.2zM21 6l-1.07-2.57L17 2.5l2.93-1.07 1.07-2.43 1.07 2.43L25 2.5l-2.93.93L21 6zm-3.23 8.77l1.23-2.77 2.77-1.23-2.77-1.23-1.23-2.77-1.23 2.77-2.77 1.23 2.77 1.23 1.23 2.77zM9 4C6.24 4 4 6.24 4 9v11h11c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5H9zm4 10.5l-4-2.3V9.3l4 2.3v2.9z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgShorts);
export default ForwardRef;
