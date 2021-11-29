import React, {useEffect} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4maps from "@amcharts/amcharts4/maps";

export const Am_BarChart = (props) => {

    useEffect(() => {

        const stringDivider = (str, width, spaceReplacer) => {
            if (str.length>width) {
                let p=width
                for (;p>0 && str[p]!=' ';p--) {
                }
                if (p>0) {
                    let left = str.substring(0, p);
                    let right = str.substring(p+1);
                    return left + spaceReplacer + stringDivider(right, width, spaceReplacer);
                }
            }
            return str;
        }
        //-----------------------
        am4core.useTheme(am4themes_animated);
        //-----------------------
        let chart = am4core.create(props.chartId, am4charts.XYChart);
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

        series.columns.template.tooltipText = "{categoryY}: {valueX} \n (click to filter)";
        series.columns.template.adapter.add('tooltipText', function(text, target) {

            if (props.useNAME == "true") {

                let data = target.tooltipDataItem.dataContext;
                let wrap_name = stringDivider(data.name, 20, "\n");
                return wrap_name+": {valueX}  \n\n (click to filter)";

            }else{
                return "{categoryY}: {valueX} \n (click to filter)";
            }

        });

        series.columns.template.strokeOpacity = 0;
        series.columns.template.column.cornerRadiusBottomRight = 5;
        series.columns.template.column.cornerRadiusTopRight = 5;

        series.columns.template.events.on("hit", function(ev) {

            let resultCHARTClick = {
                term: ev.target.dataItem.categoryY,
                type: props.filterType
            };

            if (props.useVOC == "true") {

                resultCHARTClick = {
                    term: ev.target.dataItem.dataContext.voc_code,
                    type: props.filterType
                };
            }

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

        // categoryAxis.sortBySeries = series;
        chart.data = props.chartData;

        //----------------
        chart.scrollbarY = new am4core.Scrollbar();
        chart.scrollbarY.startGrip.disabled = true;
        chart.scrollbarY.endGrip.disabled = true;
        //----------------
        categoryAxis.showOnInit = false;
        chart.events.on("ready", function () {

           let snum = parseInt(props.showNUM);
           categoryAxis.zoomToIndexes(0, snum,false,true);

        });
        //----------------
        chart.zoomOutButton.disabled = true;
        //----------------

    }, [props.filter_query]);

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
