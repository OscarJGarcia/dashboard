import React from 'react';
import {
  Category,
  ChartComponent,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  StackingColumnSeries,
  Tooltip
} from "@syncfusion/ej2-react-charts";
import {stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis} from "../../data/dummy";

const Stacked = ({width, height}) => {
    return (
        <ChartComponent
            width={width}
            heigh={height}
            id="charts"
            primaryXAxis={stackedPrimaryXAxis}
            primaryYAxis={stackedPrimaryYAxis}
            chartArea={{border: {width: 0}}}
            tooltip={{enable: true}}
            LegendSettings={{background: 'white'}}>
            <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]}></Inject>
            <SeriesCollectionDirective>
                {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item}/>)}
            </SeriesCollectionDirective>
        </ChartComponent>
    );
};

export default Stacked;
