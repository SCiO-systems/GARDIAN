import React, {useEffect} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export const Am_AssetsOverTimeChart = (props) => {

    useEffect(() => {

        am4core.useTheme(am4themes_animated);
        //-----------------------
        let chart = am4core.create(props.chartId, am4charts.XYChart);
        //-----------------------
        let datax = props.chartData;

        for (let i = 0; i < datax.length; i++) {
            datax[i]["Total"] = datax[i].Open + datax[i].Restricted;
        }

        var currentYEAR = (new Date()).getFullYear();

        if (datax[datax.length-1].year == currentYEAR) {
            datax[datax.length-2]["lineDash"] = "5,5";
            //-----------------
            datax[datax.length-1]["strokeWidth"] = 1;
            datax[datax.length-1]["columnDash"]  = "5,5";
            datax[datax.length-1]["fillOpacity"] = 0.2;
            datax[datax.length-1]["additional"]  = "(to date)";
        }
        //-----------------------
        chart.data = datax;

        //----------------------- Create axes
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "year";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 20;
        categoryAxis.renderer.cellStartLocation = 0.1;
        categoryAxis.renderer.cellEndLocation = 0.9;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;

        //----------------------- Create series

        const createSeries = (field, name,color) => {
            let series = chart.series.push(new am4charts.ColumnSeries());
            series.dataFields.valueY = field;
            series.dataFields.categoryX = "year";
            series.name = name;
            series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
            series.stacked = false;
            series.columns.template.width = am4core.percent(95);
            //series.fill = am4core.color(color);
            //series.stroke = am4core.color(color);

            series.columns.template.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
            series.columns.template.propertyFields.fillOpacity = "fillOpacity";
            series.columns.template.propertyFields.stroke = "stroke";
            series.columns.template.propertyFields.strokeWidth = "strokeWidth";
            series.columns.template.propertyFields.strokeDasharray = "columnDash";
            series.tooltip.label.textAlign = "middle";

        }

        createSeries("Open", "Open Access", "#95d2ac");
        createSeries("Restricted", "Restricted Access", "#7b9ff5");

        //----------------------- Create Total Line
        let lineSeries = chart.series.push(new am4charts.LineSeries());
        lineSeries.name = "Total";
        lineSeries.dataFields.valueY = "Total";
        lineSeries.dataFields.categoryX = "year";

        //lineSeries.stroke = am4core.color("#ffc657");
        lineSeries.strokeWidth = 3;
        lineSeries.propertyFields.strokeDasharray = "lineDash";
        lineSeries.tooltip.label.textAlign = "middle";

        var bullet = lineSeries.bullets.push(new am4charts.Bullet());
        //bullet.fill = am4core.color("#ffc657"); // tooltips grab fill from parent by default
        bullet.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
        var circle = bullet.createChild(am4core.Circle);
        circle.radius = 4;
        circle.fill = am4core.color("#fff");
        circle.strokeWidth = 3;

        //----------------------- Add legend
        chart.legend = new am4charts.Legend();


    }, [props.chartData]);



    if (props.chartTitle) {
        return (
            <div style={{textAlign:"center"}}>
                <h4 style={{margin: "0px"}}>{props.chartTitle}</h4>
                <div id={props.chartId} style={{height: props.chartHeight}}></div>
            </div>
        );
    }else{
        return (
            <div>
                <div id={props.chartId} style={{height: props.chartHeight}}></div>
            </div>
        );
    }

}
