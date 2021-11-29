import React, { useEffect } from 'react'
import L from 'leaflet'
import { useLeafletContext } from '@react-leaflet/core'
import Ethiopia from "../../../../../../assets/data/Ethiopia.json";

const BaseLayer = () => {
    const context = useLeafletContext()

    useEffect(() => {
        var ethiopiaCroped = new L.TileLayer.BoundaryCanvas('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            boundary: Ethiopia,
            toggled: true,
            id: 0,
            pane: `pane-0`,
        } )

        const container = context.layerContainer || context.map

        container.addLayer(ethiopiaCroped)

        return () => {
            container.removeLayer(ethiopiaCroped)
        }
    }, []
    )

    return null
}

export default BaseLayer