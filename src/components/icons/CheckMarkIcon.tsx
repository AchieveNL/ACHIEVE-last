import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={13}
    fill="none"
    {...props}
  >
    <path
      fill="#8639FA"
      d="M15.546 1.204c.44.44.44 1.153 0 1.592l-9 9c-.44.44-1.153.44-1.592 0l-4.5-4.5a1.127 1.127 0 0 1 1.592-1.592l3.706 3.702 8.205-8.202c.44-.44 1.153-.44 1.593 0h-.004Z"
    />
  </svg>
);
export { SvgComponent as CheckMarkIcon };
