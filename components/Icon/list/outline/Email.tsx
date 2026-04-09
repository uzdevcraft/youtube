import { forwardRef, Ref, SVGProps } from 'react';

const SvgEmail = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" ref={ref} {...props}>
      <path
        d="M2.5 10.5C2.5 9.33836 2.5 8.75754 2.59607 8.27455C2.99061 6.2911 4.5411 4.74061 6.52455 4.34607C7.00754 4.25 7.58836 4.25 8.75 4.25H11.25C12.4116 4.25 12.9925 4.25 13.4755 4.34607C15.4589 4.74061 17.0094 6.2911 17.4039 8.27455C17.5 8.75754 17.5 9.33836 17.5 10.5V10.5C17.5 11.6616 17.5 12.2425 17.4039 12.7255C17.0094 14.7089 15.4589 16.2594 13.4755 16.6539C12.9925 16.75 12.4116 16.75 11.25 16.75H8.75C7.58836 16.75 7.00754 16.75 6.52455 16.6539C4.5411 16.2594 2.99061 14.7089 2.59607 12.7255C2.5 12.2425 2.5 11.6616 2.5 10.5V10.5Z"
        stroke="#10101A"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 7.16675L4.47479 8.70262C6.82441 10.53 7.99922 11.4437 9.3412 11.6222C9.77869 11.6803 10.222 11.6803 10.6594 11.6221C12.0014 11.4436 13.1762 10.5299 15.5257 8.70237L17.5 7.16675"
        stroke="#10101A"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgEmail);
export default ForwardRef;
