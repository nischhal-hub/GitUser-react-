import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);


const Doughnut2d  =({data})=>{
  const chartConfigs = {
    type: 'pie2d',
    width: 600,
    height: 400,
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: "Most Used Language",
        // subCaption: "In MMbbl = One Million barrels",
        // xAxisName: "Country",
        // yAxisName: "Reserves (MMbbl)",
        // numberSuffix: "K",
        theme: "fusion",
      },
      data,
    }
  };
  
  return <ReactFC {...chartConfigs} />;
}
export default Doughnut2d;