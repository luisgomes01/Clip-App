import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface Props extends SvgProps {
  width?: number;
  height?: number;
  color: string;
}

const SearchIcon = ({ width = 15, height = 18, color, ...props }: Props) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      d="m13.77 12.666-2.644-2.636a6.157 6.157 0 0 0 1.314-3.81 6.22 6.22 0 1 0-6.22 6.22 6.157 6.157 0 0 0 3.81-1.314l2.636 2.644a.778.778 0 0 0 1.274-.253.777.777 0 0 0-.17-.851ZM1.555 6.22a4.665 4.665 0 1 1 9.33 0 4.665 4.665 0 0 1-9.33 0Z"
      fill={color}
    />
  </Svg>
);

export default SearchIcon;
