export default function sanitizeSvg(svgString: string) {
  return svgString.replace(/fill="(?!none)(.*?)"/gi, 'fill="currentColor"');
}
