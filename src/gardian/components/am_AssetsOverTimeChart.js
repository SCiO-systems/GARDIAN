import React, {useEffect} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
//import am4plugins_sliceGrouper from "@amcharts/amcharts4/plugins/sliceGrouper";

export const Am_DonutChart = (props) => {

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
        let chart = am4core.create(props.chartId, am4charts.PieChart);
        //-----------------------

        // Set inner radius
        chart.innerRadius = am4core.percent(40);

        // Add and configure Series
        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "frequency";
        pieSeries.dataFields.category = "value";
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeWidth = 2;
        pieSeries.slices.template.strokeOpacity = 1;

        // pieSeries.slices.template.tooltipText = "{category}: {value.percent.formatNumber('#.#')}% ({value.value}) \n\n (click to filter)";

        pieSeries.slices.template.adapter.add('tooltipText', function(text, target) {

            if (props.useNAME == "true") {

                let data = target.tooltipDataItem.dataContext;
                let wrap_name = stringDivider(data.name, 20, "\n");

                if(props.callback) {
                    return "[bold]{value.percent.formatNumber('#.#')}% ({value.value})[/] \n" + wrap_name + "\n\n (click to filter)";
                }else{
                    return "[bold]{value.percent.formatNumber('#.#')}% ({value.value})[/]";
                }

            }else{
                if(props.callback) {
                    return "[bold]{value.percent.formatNumber('#.#')}% ({value.value})[/] \n{category}\n\n (click to filter)";
                }else{
                    return "[bold]{value.percent.formatNumber('#.#')}% ({value.value})[/] \n{category}";
                }

            }

        });

        pieSeries.slices.template.events.on("hit", function(ev) {

            let resultCHARTClick = {
                term: ev.target.dataItem.category,
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


        // This creates initial animation
        pieSeries.hiddenState.properties.opacity = 1;
        pieSeries.hiddenState.properties.endAngle = -90;
        pieSeries.hiddenState.properties.startAngle = -90;



        //let grouper = pieSeries.plugins.push(new am4plugins_sliceGrouper.SliceGrouper());
        //grouper.clickBehavior = "break";
        // //grouper.threshold = 7;
        //grouper.limit = props.showNUM;

        chart.data = props.chartData;

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
