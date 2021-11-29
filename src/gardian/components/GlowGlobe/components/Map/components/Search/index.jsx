import React, {useState,useEffect} from "react";
import EthiopiaLevel1 from '../../../../../../assets/data/EthiopiaLevel1.json'
import { AutoComplete } from 'primereact/autocomplete';
import './styles.css'
import {useSelector} from "react-redux";

const Search = () => {

    const [autoValue, setAutoValue] = useState([]);
    const [selectedAutoValue, setSelectedAutoValue] = useState('');
    const [autoFilteredValue, setAutoFilteredValue] = useState([])

    const[selectedArea,setSelectedArea] = useState('')

    const layerArray = useSelector((state) => state.layerArray)

    const findCenter = () => {
        const layer = layerArray.find(item => item.options.id === 1)
        if (layer) {
            // const feature = layer.find(item => item.feature.properties.NAME_1)
        }
        console.log(layer)
    }

    useEffect(
        () => {
            findCenter()
        }, [layerArray]
    )

    useEffect (
        () => {
            const searchedCountry = autoValue.filter(item => item === selectedAutoValue)[0]
            if(searchedCountry) {
                setSelectedArea(searchedCountry)
            }
        }, [selectedAutoValue]
    )

    useEffect(() => {

        const values = EthiopiaLevel1.features.map(item => {
            return item.properties.NAME_1
        })

        console.log(EthiopiaLevel1)

        setAutoValue(values)

    }, []);

    const searchCountry = (event) => {
        setTimeout(() => {
            if (!event.query.trim().length) {
                setAutoFilteredValue([...autoValue]);
            }
            else {
                setAutoFilteredValue(autoValue.filter((country) => {
                    return country.toLowerCase().startsWith(event.query.toLowerCase());
                }));
            }
        }, 250);
    };

    return (
        <div className='search-bar'>
            <span className="p-input-icon-right">
                <AutoComplete
                    placeholder="Search a location"
                    id="dd"
                    value={selectedAutoValue}
                    onChange={(e) => setSelectedAutoValue(e.value)}
                    suggestions={autoFilteredValue}
                    completeMethod={searchCountry}
                    autoHighlight
                />
                <i className="fad fa-search" />
            </span>
        </div>
    )
}

export default Search