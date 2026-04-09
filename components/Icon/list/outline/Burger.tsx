import { forwardRef, Ref, SVGProps } from 'react';

const SvgMenu = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      ref={ref}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 8h16" />
      <path d="M4 16h16" />
    </svg>
  );
};

const ForwardRef = forwardRef(SvgMenu);
export default ForwardRef;
