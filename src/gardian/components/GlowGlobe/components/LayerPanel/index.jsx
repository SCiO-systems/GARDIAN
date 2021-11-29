import React from 'react'
import {Table} from './components'
import './styles.css'

const LayerPanel = (props) => {

    const {map, setMap} = props

    return (
        <div className='layer-panel'>
            <div className='title'>
                <i className="fas fa-layer-group"/>
                <h3>Layer Panel</h3>
            </div>
            <Table map={map}/>
        </div>
    )
}

export default LayerPanel