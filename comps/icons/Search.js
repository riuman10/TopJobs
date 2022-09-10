import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m16.5 16.5-5-5m1.667-4.167a5.832 5.832 0 1 1-11.665 0 5.832 5.832 0 0 1 11.665 0Z"
      stroke="#3F3F46"
      strokeWidth={1.667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
