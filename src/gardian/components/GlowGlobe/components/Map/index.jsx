import React, {useEffect} from 'react'
import {MapContainer} from 'react-leaflet'
import EthiopiaLevel1 from '../../../../assets/data/EthiopiaLevel1.json'
import {BaseLayer} from './components'
import L from "leaflet";
import './styles.css'
import {useSelector} from "react-redux";

const Map = (props) => {

    const layerArray = useSelector((state) => state.layerArray)

    const {map, setMap} = props

    let boundsLayer = L.geoJSON(EthiopiaLevel1)

    useEffect(
        () => {
            if (!map) return;

            map.createPane(`pane-0`)
            map.getPane(`pane-0`).style.zIndex = 401
            map.fitBounds(boundsLayer.getBounds());
            map.setMaxBounds(boundsLayer.getBounds());
            map.zoomControl.setPosition('bottomleft');
            map.options.minZoom = 5;
            map.options.maxZoom = 14;

        }, [map]
    );

    useEffect (
        () => {
            if (!map) return;

            layerArray.map(item => {

                let temp2 = false
                map.eachLayer(layer => {
                    if ((layer.options.id === item.options.id)) {
                        temp2 = true
                    }
                })
                if (!temp2 && item.options.toggled) {
                    item.addTo(map)
                }
                return null
            })

            map.eachLayer( (layer) => {
                if (layer.options.id !== 0) {
                    const temp = layerArray.find(item => item.options.id === layer.options.id)
                    if (temp) {
                        if(temp.options.toggled === false) {
                            map.removeLayer(layer)
                        }
                    }
                }
            });

        }, [layerArray]
    )

    return (
        <div className='map'>
            <MapContainer center={[8.991270, 39.648191]}  scrollWheelZoom={true} whenCreated={setMap}>
                <BaseLayer/>
            </MapContainer>
        </div>
    )
}

export default Map