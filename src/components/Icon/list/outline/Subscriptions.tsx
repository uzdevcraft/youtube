import { forwardRef, Ref, SVGProps } from "react";

const SvgSubscriptions = (
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
        d="M10 18v-2.67l5 2.67V8l-5 2.67V8H8v10h2zm7-10v10h2V8h-2zM4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0zM14 6.375a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSubscriptions);
export default ForwardRef;
