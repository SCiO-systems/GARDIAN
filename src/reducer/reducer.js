import {Actions} from './actions'
import Ethiopia from "../assets/data/Ethiopia.json";
import L from "leaflet";
import BoundaryCanvas from "../utils/BoundaryCanvas";
import EthiopiaLevel1 from "../assets/data/EthiopiaLevel1.json";
import EthiopiaLevel2 from "../assets/data/EthiopiaLevel2.json";
import EthiopiaLevel3 from "../assets/data/EthiopiaLevel3.json";
import EthiopiaLandCoverSmall from '../assets/data/EthiopiaLandCoverSmall.tif'
import EthiopiaLandCover from '../assets/data/EthiopiaLandCover.tif'

var ethiopiaCroped = new L.TileLayer.BoundaryCanvas('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                    boundary: Ethiopia,
                    toggled: true,
                    id: 0,
                    pane: `pane-0`,
                } )

const exampleLayers = [
    {
        id:1,
        type: 'geojson',
        name:"Ethiopia Level 1",
        value: EthiopiaLevel1,
        opacity: 1,
        toggled: false,
    },
    {
        id:2,
        type: 'geojson',
        name:"Ethiopia Level 2",
        value: EthiopiaLevel2,
        opacity: 1,
        toggled: false,
    },
    {
        id:3,
        type: 'geojson',
        name:"Ethiopia Level 3",
        value: EthiopiaLevel3,
        opacity: 1,
        toggled: false,
    },
    {
        id:4,
        type: 'geotiff',
        name:"Ethiopia Land Cover Small",
        value: EthiopiaLandCoverSmall,
        opacity: 1,
        toggled: false,
        minimum:0,
        maximum:100,
        minimumColor:"#F5DBCB",
        maximumColor:"#ED7B84",
        distribution:"continuous",
        colorScheme:"Viridis",
    },
    {
        id:5,
        type: 'geotiff',
        name:"Ethiopia Land Cover",
        value: EthiopiaLandCover,
        opacity: 1,
        toggled: false,
        minimum:0,
        maximum:100,
        minimumColor:"#d1f5cb",
        maximumColor:"#a1ed7b",
        distribution:"continuous",
        colorScheme:"Viridis",
    }
]

const initState = {
    selectedCountry: '',
    selectedCountryId: '',
    conflictLevel: 'Limited',
    toggleLevel1: false,
    layerArray: [ethiopiaCroped],
    configurationArray: exampleLayers,
    map: null,
}

const reducer = (currentState = initState, action) => {
    switch (action.type) {
        case Actions.SetSelectedCountry:
            return{
                ...currentState,
                selectedCountry: action.payload
            }
        case Actions.SetSelectedCountryId:
            return{
                ...currentState,
                selectedCountryId: action.payload
            }
        case Actions.SetConflictLevel:
            return{
                ...currentState,
                conflictLevel: action.payload
            }
        case Actions.SetLayerArray:
            return{
                ...currentState,
                layerArray: action.payload
            }
        case Actions.SetConfigurationArray:
            return{
                ...currentState,
                configurationArray: action.payload
            }
        case Actions.SetMap:
            return{
                ...currentState,
                map: action.payload
            }
        default: return currentState
    }
}

export default reducer