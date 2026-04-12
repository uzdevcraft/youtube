import { forwardRef, Ref, SVGProps } from 'react';

const SvgLocation = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='21' viewBox='0 0 20 21' fill='none' ref={ref} {...props}>
      <path
        d='M10.0001 3C5.85797 3 2.49997 6.33333 3.33344 10.5C3.85761 13.1205 6.35932 15.5761 8.14386 17.0378C8.82698 17.5973 9.16854 17.8771 9.72646 17.9542C9.87755 17.975 10.1227 17.975 10.2738 17.9542C10.8317 17.8771 11.1732 17.5973 11.8564 17.0378C13.641 15.5762 16.1427 13.1205 16.6668 10.5C17.5 6.33333 14.1422 3 10.0001 3Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <path
        d='M12.5 9.79167C12.5 11.1724 11.3807 12.2917 10 12.2917C8.61929 12.2917 7.5 11.1724 7.5 9.79167C7.5 8.41095 8.61929 7.29167 10 7.29167C11.3807 7.29167 12.5 8.41095 12.5 9.79167Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgLocation);
export default ForwardRef;
