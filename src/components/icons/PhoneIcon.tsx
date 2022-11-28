import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg";

interface Props extends SvgProps {
  width?: number;
  height?: number;
  color: string;
}

const PhoneIcon = ({ width = 18, height = 18, color, ...props }: Props) => (
  <Svg width={width} height={height} viewBox="0 0 18 18" {...props}>
    <G clipPath="url(#clip0_23_377)">
      <Path
        d="M7.915 4.68L5.378 1.751c-.292-.337-.829-.336-1.168.005l-2.087 2.09c-.62.622-.799 1.545-.44 2.285a21.906 21.906 0 0010.171 10.185c.74.36 1.663.182 2.284-.44l2.106-2.11c.34-.341.341-.88.001-1.173l-2.94-2.524c-.307-.263-.785-.229-1.094.08l-1.023 1.025a.346.346 0 01-.414.066 10.918 10.918 0 01-4.02-4.026.347.347 0 01.066-.415l1.02-1.021c.309-.31.342-.79.075-1.099v.001z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_23_377">
        <Path fill="#fff" d="M0 0H18V18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default PhoneIcon;
