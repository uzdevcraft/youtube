import { forwardRef, Ref, SVGProps } from "react";

const SvgMenu = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      width="24"
      height="24"
      fill="currentColor"
      ref={ref}
      {...props}
    >
      <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z" />
    </svg>
  );
};

const ForwardRef = forwardRef(SvgMenu);
export default ForwardRef;
