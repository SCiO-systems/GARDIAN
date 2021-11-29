import React, {useEffect} from 'react'
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4core from "@amcharts/amcharts4/core";


const Legend = (props) => {


    useEffect(
        () => {
        am4core.addLicense("CH289451215");

        let heatLegend = am4core.create("legend-"+props.data.id, am4charts.HeatLegend);
        heatLegend.width = am4core.percent(100);
        heatLegend.paddingLeft = am4core.percent(2);
        heatLegend.paddingRight = am4core.percent(2);
        heatLegend.paddingTop = am4core.percent(2);
        heatLegend.paddingBottom = am4core.percent(2);

        heatLegend.minColor = am4core.color(props.data.minimumColor);
        heatLegend.maxColor = am4core.color(props.data.maximumColor);
        heatLegend.minValue = props.data.minimum;
        heatLegend.maxValue = props.data.maximum;
        heatLegend.valueAxis.renderer.labels.template.fontSize = 9;
        heatLegend.valueAxis.renderer.minGridDistance = 30;
        heatLegend.markerCount = 10;

    }, [props.data.id]);


    return (
        <div className={props.className} id={"legend-"+props.data.id}>
        </div>

    );

}

export default Legend
