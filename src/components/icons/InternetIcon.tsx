import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface Props extends SvgProps {
  width?: number;
  height?: number;
  color: string;
}

const InternetIcon = ({ width = 18, height = 18, color, ...props }: Props) => (
  <Svg width={width} height={height} viewBox="0 0 18 18" {...props}>
    <Path
      d="M16.5 9A7.5 7.5 0 109 16.5M9.75 1.537S12 4.5 12 9m-3.75 7.462S6 13.5 6 9s2.25-7.463 2.25-7.463M1.973 11.625H9m-7.027-5.25h14.054"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.41 13.438c.37.228.346.782-.035.825l-1.925.219-.863 1.734c-.171.344-.7.175-.787-.25l-.942-4.588c-.074-.36.25-.586.563-.393l3.988 2.453v0z"
      stroke={color}
      strokeWidth={1.5}
    />
  </Svg>
);

export default InternetIcon;
