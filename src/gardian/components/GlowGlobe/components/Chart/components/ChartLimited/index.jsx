import React, { useLayoutEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4charts from "@amcharts/amcharts4/charts";

am4core.useTheme(am4themes_animated);

const Chart = () => {

    useLayoutEffect(() => {

        var chart = am4core.create('chart-hotspots', am4charts.XYChart)

        chart.paddingTop = 50;


        chart.legend = new am4charts.Legend()
        chart.legend.position = 'bottom'
        chart.legend.paddingBottom = 20
        chart.legend.labels.template.maxWidth = 95

        chart.numberFormatter.numberFormat = "#.#s";

        var yAxis = chart.yAxes.push(new am4charts.CategoryAxis())
        yAxis.dataFields.category = 'category'
        yAxis.renderer.cellStartLocation = 0.1
        yAxis.renderer.cellEndLocation = 0.9
        yAxis.renderer.grid.template.location = 0;

        var xAxis = chart.xAxes.push(new am4charts.ValueAxis());

        var label1 = chart.createChild(am4core.Label);
        label1.text = "Immigration";
        label1.fontSize = 20;
        label1.fill = am4core.color("#d16d16");
        label1.isMeasured = false;
        label1.x = am4core.percent(75);
        label1.horizontalCenter = "middle";
        label1.y = -30;

        var label2 = chart.createChild(am4core.Label);
        label2.text = "Outmigration";
        label2.fontSize = 20;
        label2.fill = am4core.color("#d16d16");
        label2.isMeasured = false;
        label2.x = am4core.percent(25);
        label2.horizontalCenter = "middle";
        label2.y = -30;

        function createSeries(value, name) {
            var series = chart.series.push(new am4charts.ColumnSeries())
            series.dataFields.valueX = value;
            series.dataFields.categoryY = 'category';
            series.name = name
            series.events.on("hidden", arrangeColumns);
            series.events.on("shown", arrangeColumns);
            series.columns.template.tooltipText = "Click to see";
            series.columns.template.tooltipX = am4core.percent(50);
            series.tooltip.pointerOrientation = "vertical";

            return series;
        }

        chart.data = [
            {
                category: 'Humid',
                ex: 3,
                se: 36,
                mo: -32,
            },
            {
                category: 'Dry Cool',
                ex: 33,
                se: 12,
                mo: -11
            },
            {
                category: 'Dry Warm',
                ex: 3,
                se: 3,
                mo: -28
            },
            {
                category: 'Dry Hot',
                ex: 2,
                se: 18,
                mo: -1
            }
        ]

        chart.colors.list = [
            am4core.color("#fdc82f"),
            am4core.color("#f59e2f"),
            am4core.color("#b46b0d")
        ];

        createSeries('mo', 'Moderate');
        createSeries('se', 'Severe');
        createSeries('ex', 'Extreme');

        function arrangeColumns() {

            var series = chart.series.getIndex(0);

            var w = 1 - yAxis.renderer.cellStartLocation - (1 - yAxis.renderer.cellEndLocation);
            if (series.dataItems.length > 1) {
                var x0 = yAxis.getX(series.dataItems.getIndex(0), "categoryX");
                var x1 = yAxis.getX(series.dataItems.getIndex(1), "categoryX");
                var delta = ((x1 - x0) / chart.series.length) * w;
                if (am4core.isNumber(delta)) {
                    var middle = chart.series.length / 2;

                    var newIndex = 0;
                    chart.series.each(function(series) {
                        if (!series.isHidden && !series.isHiding) {
                            series.dummyData = newIndex;
                            newIndex++;
                        }
                        else {
                            series.dummyData = chart.series.indexOf(series);
                        }
                    })
                    var visibleCount = newIndex;
                    var newMiddle = visibleCount / 2;

                    chart.series.each(function(series) {
                        var trueIndex = chart.series.indexOf(series);
                        var newIndex = series.dummyData;

                        var dx = (newIndex - trueIndex + middle - newMiddle) * delta

                        series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                        series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                    })
                }
            }
        }

        return () => {
            chart.dispose();
        };
    }, []);

    return (
        <div id="chart-hotspots" style={{ width: "100%", height: "100%" }}></div>
    );
}
export default Chart;