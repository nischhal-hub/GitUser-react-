import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';


ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);


const Bar3D =({data})=>{
  const chartConfigs = {
    type: 'bar2d',
    width: '100%',
    height: 400,
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: "Most Forked",
        decimals:0,
        xAxisName: "Forks",
        yAxisName: "Repos",
        // numberSuffix: "K",
        xAxisNameFontSize:"16px",
        yAxisNameFontSize:"16px",
        theme: "fusion",
      },
      data,
    }
  };
  
  return <ReactFC {...chartConfigs} />;
}
export default Bar3D;