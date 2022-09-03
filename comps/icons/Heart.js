import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.228 5.185a3 3 0 0 1 4.893-.973L8 5.091l.879-.879a3 3 0 0 1 4.242 4.243L8 13.576 2.879 8.455a3 3 0 0 1-.65-3.27Z"
      stroke="#A1A1AA"
      strokeWidth={1.333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
