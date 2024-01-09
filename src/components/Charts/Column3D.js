import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';


ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);


const Column3D =({data})=>{
  const chartConfigs = {
    type: 'column2d',
    width: '100%',
    height: 400,
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: "Most Popular",
        subCaption: "Languages",
        decimals:0,
        xAxisName: "Repos",
        yAxisName: "Stars",
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
export default Column3D;