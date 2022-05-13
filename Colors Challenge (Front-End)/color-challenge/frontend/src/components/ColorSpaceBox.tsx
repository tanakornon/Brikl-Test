import React from 'react';
import { IColorSpace } from '../types/color.type';

interface ColorSpaceProps {
  colorSpace: IColorSpace;
}

const ColorSpaceBox: React.FC<ColorSpaceProps> = (
  props
): React.ReactElement => {
  const svgColor = props.colorSpace.toSvgColor();

  return (
    <svg className="color-space-box">
      <rect width="100%" height="100%" fill={svgColor} />
      <text x="50%" y="50%" dominant-baseline="middle" fill="white" text-anchor="middle">
        {svgColor}
      </text>
    </svg>
  );
};

export default ColorSpaceBox;
