import React, {useEffect} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export const BarChart = (props) => {

    useEffect(() => {

        am4core.useTheme(am4themes_animated);
        //-----------------------
        let chart = am4core.create(props.barChartId, am4charts.XYChart);
        //-----------------------

        let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.dataFields.category = "value";
        categoryAxis.renderer.minGridDistance = 1;
        categoryAxis.renderer.inversed = true;
        categoryAxis.renderer.grid.template.disabled = true;

        let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;

        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.categoryY = "value";
        series.dataFields.valueX = "frequency";
        /* series.tooltipText = "{categoryY} {valueX}"; */
        series.columns.template.tooltipText = "{categoryY}: {valueX} \n (click to filter)";
        series.columns.template.strokeOpacity = 0;
        series.columns.template.column.cornerRadiusBottomRight = 5;
        series.columns.template.column.cornerRadiusTopRight = 5;

        series.columns.template.events.on("hit", function(ev) {

            const resultCHARTClick = {
                term: ev.target.dataItem.categoryY,
                type: props.filterType
            };

            if(props.callback){
                props.callback(resultCHARTClick);
            }
        });

        let labelBullet = series.bullets.push(new am4charts.LabelBullet())
        labelBullet.label.horizontalCenter = "left";
        labelBullet.label.dx = 10;
        labelBullet.label.text = "{values.valueX.workingValue.formatNumber('#.0as')}";
        labelBullet.locationX = 1;

// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
        series.columns.template.adapter.add("fill", function(fill, target){
            return chart.colors.getIndex(target.dataItem.index);
        });

        categoryAxis.sortBySeries = series;
        chart.data = props.chartData.slice(0,20);

       // chart.scrollbarY = new am4core.Scrollbar();

    }, [props.filter_query]);

    return (
        <>
            <div style={{textAlign:"center"}}>
                <h4>Top 10 Countries</h4>
                <div id={props.barChartId} style={{height: "340px"}}></div>
            </div>

        </>
    );
}
