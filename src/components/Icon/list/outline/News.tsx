import { forwardRef, Ref, SVGProps } from "react";

const SvgNews = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
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
        d="M23 3H5c-1.1 0-2 .9-2 2v11H1v2h14v-2H3V5h18v13h2V5c0-1.1-.9-2-2-2zm-5 6H6V7h12v2zm-4 4H6v-2h8v2zm4 0h-2v-2h2v2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNews);
export default ForwardRef;
