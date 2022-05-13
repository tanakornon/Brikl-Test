import React, { useState } from 'react';
import { getColorSwatch } from '../services/color.service';
import { IColorSpace } from '../types/color.type';
import ColorSpaceBox from './ColorSpaceBox';

const ColorSwatchPanel: React.FC<{}> = (): React.ReactElement => {
  const [data, setData] = useState([] as IColorSpace[]);

  const fetchApi = () => {
    getColorSwatch().then((data) => {
      setData(data);
    });
  };

  const onClick = () => {
    fetchApi();
  };

  return (
    <div className="container">
      <div className="color-swatch-box">
        {data.map((colorSpace, index) => (
          <ColorSpaceBox key={index} colorSpace={colorSpace} />
        ))}
      </div>
      <button className="fetch-button mt" onClick={onClick}>
        Fetch API
      </button>
    </div>
  );
};

export default ColorSwatchPanel;
