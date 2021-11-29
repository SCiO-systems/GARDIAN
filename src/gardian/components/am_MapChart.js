import React, {useEffect} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldHigh from "@amcharts/amcharts4-geodata/worldHigh";
//import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export const MapCountries = (props) => {

    useEffect(() => {

        am4core.useTheme(am4themes_animated);

        let chart = am4core.create(props.mapLandingId, am4maps.MapChart);

        let selected_countries = props.mapData;

      //  let selected_countries = ["DZ", "KE", "GH", "ID", "PH", "IN"];

        chart.geodata = am4geodata_worldHigh;


        chart.projection = new am4maps.projections.Miller();


        let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

        polygonSeries.exclude = ["AQ"];

        polygonSeries.useGeodata = true;

        let polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "";
        polygonTemplate.polygon.fillOpacity = 0.6;

        let as = polygonTemplate.states.create("active");
        as.properties.tooltipText = "{name}";
        as.properties.fill = am4core.color("#5583C4");

        let north, south, west, east;

        chart.events.on("ready", function(ev) {

            // Find extreme coordinates for all pre-zoom countries

            if(selected_countries){
                for(let i = 0; i < selected_countries.length; i++) {
                    let country = polygonSeries.getPolygonById(selected_countries[i]);
                    if (north == undefined || (country.north > north)) {
                        north = country.north;
                    }
                    if (south == undefined || (country.south < south)) {
                        south = country.south;
                    }
                    if (west == undefined || (country.west < west)) {
                        west = country.west;
                    }
                    if (east == undefined || (country.east > east)) {
                        east = country.east;
                    }

                    country.isActive = true;
                }
                // Pre-zoom
                chart.zoomToRectangle(north, east, south, west, 1, true);
            }

        });

        chart.smallMap = new am4maps.SmallMap();
        chart.smallMap.series.push(polygonSeries);

        chart.smallMap.rectangle.stroke = am4core.color("#5583C4");
        chart.smallMap.rectangle.strokeWidth = 2;

        chart.smallMap.background.stroke = am4core.color("#666666")
        chart.smallMap.background.strokeOpacity = 0.9;
        chart.smallMap.background.strokeWidth = 1;


        chart.smallMap.align = "left";
        chart.smallMap.valign = "top";

        let smallSeries = chart.smallMap.series.getIndex(0);
        smallSeries.mapPolygons.template.stroke = smallSeries.mapPolygons.template.fill;
        smallSeries.mapPolygons.template.strokeWidth = 1;

        chart.zoomControl = new am4maps.ZoomControl();

        let homeButton = new am4core.Button();
        homeButton.events.on("hit", function(){
            //chart.goHome();
            chart.zoomToRectangle(north, east, south, west, 1, true);
        });

        homeButton.icon = new am4core.Sprite();
        homeButton.padding(7, 5, 7, 5);
        homeButton.width = 30;
        homeButton.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
        homeButton.marginBottom = 10;
        homeButton.parent = chart.zoomControl;
        homeButton.insertBefore(chart.zoomControl.plusButton);
    }, [props.mapData]);

    return (
        <div>
            <div id={props.mapLandingId} className="" style={{  height: '340px'}}></div>
        </div>
    );
}
