import React, { useState } from 'react';
import BarChartComponent from './BarChartComponent';
import AreaChartComponent from './AreaChartComponent';
import Wrapper from '../assets/wrappers/ChartsContainer';
const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type='button' onClick={() => setBarChart(!barChart)}>
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart ? <BarChartComponent data={1} /> : <AreaChartComponent data={1} />}
    </Wrapper>
  );
};

export default ChartsContainer;