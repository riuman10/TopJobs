import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={3.707} cy={4.207} r={5.207} fill="#D4D4D8" />
    <path
      fill="#C4C4C4"
      d="M1.611 16.28 16.756 1.135l6.945 6.946L8.556 23.225z"
    />
  </svg>
)

export default SvgComponent