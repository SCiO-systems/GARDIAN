import React, {useEffect} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export const FairScoring = (props) => {

    useEffect( () => {
        am4core.useTheme(am4themes_animated);

        let chart = am4core.create(props.fairId, am4charts.RadarChart);
        chart.data = props.fair;
        chart.startAngle = -90;
        chart.endAngle = 180;
        chart.innerRadius = am4core.percent(20);

        chart.numberFormatter.numberFormat = "#.##";


        let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "category";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.grid.template.strokeOpacity = 0;
        categoryAxis.renderer.labels.template.horizontalCenter = "right";
        categoryAxis.renderer.labels.template.fontWeight = 500;

        categoryAxis.renderer.labels.template.adapter.add("fill", function(fill, target) {

            return "#08429e";

            // return (target.dataItem.index >= 0) ? chart.colors.getIndex(target.dataItem.index) : fill;

        });
        categoryAxis.renderer.minGridDistance = 10;

        let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.grid.template.strokeOpacity = 0;
        valueAxis.min = 0;
        valueAxis.max = 5;
        valueAxis.renderer.labels.template.fontSize = "0em";

        let series1 = chart.series.push(new am4charts.RadarColumnSeries());
        series1.dataFields.valueX = "full";
        series1.dataFields.categoryY = "category";
        series1.clustered = false;
        series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
        series1.columns.template.fillOpacity = 0.08;
        series1.columns.template.cornerRadiusTopLeft = 20;
        series1.columns.template.strokeWidth = 0;
        series1.columns.template.radarColumn.cornerRadius = 20;

        let series2 = chart.series.push(new am4charts.RadarColumnSeries());
        series2.dataFields.valueX = "value";
        series2.dataFields.categoryY = "category";
        series2.clustered = false;
        series2.columns.template.strokeWidth = 0;
        series2.columns.template.tooltipText = "{cat}\n [bold]{value}[/] / 5";
        series2.columns.template.radarColumn.cornerRadius = 20;

        series2.columns.template.adapter.add("fill", function(fill, target) {

            switch ( target.dataItem.index ) {
                case 0: return "#56d494";
                case 1: return "#72d2e2";
                case 2: return "#7b9ff5";
                case 3: return "#927ce1";
            }

            //return chart.colors.getIndex(target.dataItem.index);
        });

        let xvalue = 0;
        let xfull = 0;


        for (let i = 0; i < chart.data.length; i++) {

            xvalue = xvalue + chart.data[i].value;
            xfull = xfull + chart.data[i].full;

        }

        let label = chart.createChild(am4core.Label);
        label.text = (100 * xvalue / xfull).toFixed(0) + "%";
        label.fontSize = 22;
        //label.align = "center";
        label.isMeasured = false;
        label.x = 30;
        label.y = 40;

    }, [])


    return (
        <div>
            <div id={props.fairId} className="fair-scoring-div" style={{ width: '240px', height: '240px'}}></div>
        </div>
    )

}


