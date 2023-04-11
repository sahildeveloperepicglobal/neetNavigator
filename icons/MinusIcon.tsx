import * as React from "react";
import { SVGProps } from "react";
const MinusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    {...props}
  >
    <path d="M5 11V13H19V11H5Z" fill="#000"></path>
  </svg>
);
export default MinusIcon;
