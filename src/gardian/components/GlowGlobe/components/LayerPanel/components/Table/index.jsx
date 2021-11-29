import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Actions} from "../../../../../../reducer/actions";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Slider} from "primereact/slider";
import {Divider} from "primereact/divider";
import {Checkbox} from "primereact/checkbox";
import {Legend} from './components'
import L from "leaflet";
import './styles.css'
import parse_georaster from 'georaster'
import GeoRasterLayer from 'georaster-layer-for-leaflet'
import chroma from "chroma-js";

const Table = (props) => {

    const {map} = props

    const dispatch = useDispatch();

    const layerArray = useSelector((state) => state.layerArray)
    const setLayerArray = (payload) => dispatch({ type: Actions.SetLayerArray, payload });

    const configurationArray = useSelector((state) => state.configurationArray)
    const setConfigurationArray = (payload) => dispatch({ type: Actions.SetConfigurationArray, payload });

    const [expandedRows, setExpandedRows] = useState(null);

    function onEachFeature(feature, layer) {
        layer.on({
            click: whenClicked
        });
    }

    function whenClicked(e) {
        map.fitBounds(e.target.getBounds());
    }

    useEffect (
        () => {
            if (!map) return

            let layers = []
            configurationArray.map(item => {
                map.createPane(`pane-${item.id}`)
                map.getPane(`pane-${item.id}`).style.zIndex = 500 - item.id
                let layer
                if (item.type === 'geojson') {
                    layer = new L.geoJSON(item.value,
                        {
                            type: 'geojson',
                            pane: `pane-${item.id}`,
                            toggled: item.toggled,
                            id:item.id,
                            style: {fillOpacity: item.opacity, opacity:item.opacity ,weight: 2,color: '#d16d16', fillColor: '#f4b680'},
                            onEachFeature: onEachFeature,
                        })
                    layers.push(layer)

                }
                if (item.type === 'geotiff') {
                    fetch(item.value)
                        .then(response => response.arrayBuffer())
                        .catch(err => console.log(err))
                        .then(arrayBuffer => {
                            parse_georaster(arrayBuffer)
                                .then(georaster => {
                                const min = georaster.mins[0];
                                const max = georaster.maxs[0];
                                const range = georaster.ranges[0];
                                var scale = chroma.scale([item.minimumColor, item.maximumColor]);
                                layer = new GeoRasterLayer({
                                    type: 'geotiff',
                                    georaster: georaster,
                                    opacity: item.opacity,
                                    id:item.id,
                                    pane: `pane-${item.id}`,
                                    resolution: 256,
                                    toggled: item.toggled,
                                    pixelValuesToColorFn: function(pixelValues) {

                                        var pixelValue = pixelValues[0]; // there's just one band in this raster
                                        if (pixelValue === 0) return null;
                                        var scaledPixelValue = (pixelValue - min) / range;
                                        var color = scale(scaledPixelValue).hex();

                                        return color;
                                    },
                                });
                                layers.push(layer)
                                setLayerArray(layers)
                            })
                                .catch(err => console.log(err));
                        })
                        .catch(err => console.log(err))
                }
            })
            const base = layerArray.find(item => item.options.id === 0)
            layers.push(base)
            if (!configurationArray.find(item => item.type === 'geotiff')) {
                setLayerArray(layers)
            }
        }, [map]
    )

    const sliderTemplate = (data) => {

        if (data.id !==0) {
            return (
                <Slider
                    value={(configurationArray.find(item => item.id===data.id)).opacity*100}
                    onChange={(e) => updateLayerOpacity(data.id,e.value/100)}
                    step={1}
                    animate={true}
                    style={{ width: '100%' }}
                />
            )
        }
    }

    const updateLayerOpacity = (id,opacity) => {

        map.eachLayer( layer => {
            if (layer.options.id === id) {
                if (layer.options.type === 'geojson') {
                    layer.setStyle({fillOpacity:(opacity),opacity:opacity, weight: 2,color: '#d16d16', fillColor: '#f4b680'})
                }
                if (layer.options.type === 'geotiff') {
                    layer.setOpacity(opacity)
                }
            }
        })

        let _configurationArray = configurationArray.map(
            (item) => {
                if(item.id === id){
                    item.opacity = opacity
                }
                return item;
            }
        )
        setConfigurationArray(_configurationArray)
    }

    const toggleTemplate = (data) => {

        return (
            <div style={{display: "flex", justifyContent: "center"}}>
                <Checkbox inputId="binary" checked={data.toggled} onChange={e => updateToggled(data.id, !data.toggled)}/>
            </div>
        )
    }

    const updateToggled =  (id, value) => {

        const toggledLayerConfiguration = configurationArray.find(item => item.id === id)
        toggledLayerConfiguration.toggled = value
        const toggledLayer = layerArray.find(item => item.options.id === id)
        const updatedArray = layerArray
        updatedArray.splice(layerArray.indexOf(toggledLayer), 1)

        let layer
        if (toggledLayerConfiguration.type === 'geojson') {
                    layer = new L.geoJSON(toggledLayerConfiguration.value,
                        {
                            type: 'geojson',
                            pane: `pane-${toggledLayerConfiguration.id}`,
                            toggled: toggledLayerConfiguration.toggled,
                            id:toggledLayerConfiguration.id,
                            style: {fillOpacity: toggledLayerConfiguration.opacity, opacity:toggledLayerConfiguration.opacity ,weight: 2,color: '#d16d16', fillColor: '#f4b680'},
                            onEachFeature: onEachFeature,
                        })
                    setLayerArray([...updatedArray, layer])
        }
            if (toggledLayerConfiguration.type === 'geotiff') {
                fetch(toggledLayerConfiguration.value)
                    .then(response => response.arrayBuffer())
                    .catch(err => console.log(err))
                    .then(arrayBuffer => {
                        parse_georaster(arrayBuffer)
                            .then(georaster => {
                            const min = georaster.mins[0];
                            const max = georaster.maxs[0];
                            const range = georaster.ranges[0];
                            var scale = chroma.scale([toggledLayerConfiguration.minimumColor, toggledLayerConfiguration.maximumColor]);
                            layer = new GeoRasterLayer({
                                type: 'geotiff',
                                georaster: georaster,
                                opacity: toggledLayerConfiguration.opacity,
                                id:toggledLayerConfiguration.id,
                                pane: `pane-${toggledLayerConfiguration.id}`,
                                resolution: 256,
                                toggled: toggledLayerConfiguration.toggled,
                                pixelValuesToColorFn: function(pixelValues) {

                                    var pixelValue = pixelValues[0]; // there's just one band in this raster
                                    if (pixelValue === 0) return null;
                                    var scaledPixelValue = (pixelValue - min) / range;
                                    var color = scale(scaledPixelValue).hex();

                                    return color;
                                },
                            });
                            setLayerArray([...updatedArray, layer])
                        })
                        .catch(err => console.log(err))
                    })
                    .catch(err => console.log(err))
            }
    }

    const zoomTemplate = (data) => {

        const zoomToLayer = () => {
            const layer = layerArray.find( item => item.options.id === data.id)
            if (layer) {
                map.fitBounds(layer.getBounds())
            }
        }
        return (
            <div style={{display: "flex", justifyContent: "center"}}>
                <i className="fas fa-search" onClick={zoomToLayer}  style={{ cursor: 'pointer' }}/>
            </div>
        )
    }

    const onRowReorder = (e) => {

        setConfigurationArray(e.value)
        e.value.map(item => {
            map.getPane(`pane-${item.id}`).style.zIndex = 500 - e.value.indexOf(item)
        })

    }

    const rowExpansionTemplate = (data) => {
        return (
            <div style={{backgroundColor:"white",padding:"10px 10px"}}>
                <h5>Legend:</h5>
                {data.type === 'geotiff' ? <Legend data={data} className="legend-div" /> : null}
                <Divider align="left">
                    <div className="p-d-inline-flex p-ai-center">
                        <i className="fad fa-filter p-mr-2"></i>
                        <span>Filter</span>
                    </div>
                </Divider>
            </div>
        );
    };

    return (
        <DataTable value={configurationArray}
            emptyMessage = "No Available Layers"
            onRowReorder={onRowReorder}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={rowExpansionTemplate}
            expandedRows={expandedRows}
        >
            <Column expander style={{ width: '5%' }} />
            <Column field="toggle" body={toggleTemplate} style={{  }}/>
            <Column field="name" header="Layer Name" style={{ width: '20%', fontFamily: "Lato" }}/>
            <Column field="opacity" header="Opacity" body={sliderTemplate} style={{  }}/>
            <Column field="zoom" body={zoomTemplate} style={{ }}/>
            <Column rowReorder rowReorderIcon="fad fa-arrows" />
        </DataTable>
    )
}

export default Table