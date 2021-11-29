import React, {useEffect, useState} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud";

export const TagCloud = (props) => {

    useEffect( () => {

        am4core.useTheme(am4themes_animated);
        let chart = am4core.create(props.cloudId, am4plugins_wordCloud.WordCloud);
        chart.fontFamily = "Courier New";
        let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
        series.randomness = 0.1;
        series.rotationThreshold = 0.5;
        series.data = props.cloud;

        series.labels.template.events.on("hit", function(ev) {
            const resultCHARTClick = {
                term: ev.target.currentText,
                type: props.filterType
            };

            if(props.callback){
                props.callback(resultCHARTClick);
            }
        });

        series.dataFields.word = "value";
        series.dataFields.value = "frequency";

        series.heatRules.push({
            "target": series.labels.template,
            "property": "fill",
            "min": am4core.color("#8884d8"),
            "max": am4core.color("#82ca9d"),
            "dataField": "value"
        });

        series.labels.template.tooltipText = "{word}: {value}";

        let hoverState = series.labels.template.states.create("hover");
        hoverState.properties.fill = am4core.color("#ffc657");

        let title = chart.titles.create();
        // title.text = props.cloudTitle;
        title.fontSize = 19;
        title.fontWeight = "800";
        // title.color = "#fff";
        // title.backgroundColor = "#6d6e71";
        // title.textTransform = "Uppercase";

    }, [props.filter_query])

    return (
        <div>
           <div className="tab_cloud_chart" id={props.cloudId}></div>
        </div>
    )

}


