import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg";

interface Props extends SvgProps {
  width?: number;
  height?: number;
  color: string;
}

const BarCodeIcon = ({ width = 18, height = 18, color, ...props }: Props) => (
  <Svg width={width} height={height} viewBox="0 0 18 18" {...props}>
    <G clipPath="url(#clip0_23_381)" fill={color}>
      <Path d="M2.5 3.5A.5.5 0 002 4v11a.5.5 0 001 0V4a.5.5 0 00-.5-.5zM4.5 3.5A.5.5 0 004 4v9a.5.5 0 001 0V4a.5.5 0 00-.5-.5zM6.5 3.5A.5.5 0 006 4v9a.5.5 0 001 0V4a.5.5 0 00-.5-.5zM8.5 3.5A.5.5 0 008 4v9a.5.5 0 001 0V4a.5.5 0 00-.5-.5zM10.5 3.5a.5.5 0 00-.5.5v9a.5.5 0 001 0V4a.5.5 0 00-.5-.5zM12.5 3.5a.5.5 0 00-.5.5v9a.5.5 0 001 0V4a.5.5 0 00-.5-.5zM14.5 3.5a.5.5 0 00-.5.5v9a.5.5 0 001 0V4a.5.5 0 00-.5-.5zM16.5 3.5a.5.5 0 00-.5.5v11a.5.5 0 001 0V4a.5.5 0 00-.5-.5z" />
    </G>
    <Defs>
      <ClipPath id="clip0_23_381">
        <Path fill="#fff" d="M0 0H18V18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default BarCodeIcon;
