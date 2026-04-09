import { forwardRef, Ref, SVGProps } from "react";

const SvgTrending = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => {
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
        d="M17.5 10h-3l3.5-7H11v9h2v9l8-11h-3.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgTrending);
export default ForwardRef;
