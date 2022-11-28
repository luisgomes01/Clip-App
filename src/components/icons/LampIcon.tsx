import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

interface Props extends SvgProps {
  width?: number;
  height?: number;
  color: string;
}

const LampIcon = ({ width = 18, height = 18, color, ...props }: Props) => (
  <Svg width={width} height={height} viewBox="0 0 14 18" {...props}>
    <Path
      d="M5.5 16.5h3M4 11.25h6m-8.25-4.5a5.25 5.25 0 119.904 2.427A5.23 5.23 0 0110 11.05l-.406 1.925A1.5 1.5 0 018.11 14.25H5.889a1.5 1.5 0 01-1.482-1.275L4 11.059A5.243 5.243 0 011.75 6.75v0z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default LampIcon;
