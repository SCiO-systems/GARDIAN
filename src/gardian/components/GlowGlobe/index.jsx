import React, {useState} from 'react'
import {Map, Chart, LayerPanel} from './components'
import {MenuBar, Footer} from "../../components";
import {Button} from "primereact/button";
import './styles.css'

import { jsPanel } from 'jspanel4/es6module/jspanel';
import 'jspanel4/es6module/extensions/modal/jspanel.modal';
import 'jspanel4/dist/jspanel.min.css';
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {store} from '../../index'

const GlowGlobe = () => {

    const [map, setMap] = useState(null)
    const [displayPanel, setDisplayPanel] = useState(true)

    const create = () => {
        setDisplayPanel(false)
        jsPanel.create({
            // position: 'right-top',
            position: {
                at: 'center',
                maxTop: '0',
            },
            contentSize: '70vh 40vw',
            headerTitle: 'Example panel',
            theme: 'primary',
            animateIn: 'jsPanelFadeIn',
            animateOut: 'jsPanelFadeOut',
            onclosed: () => setDisplayPanel(true),
            content: panel => {
                const div = document.createElement('div');
                div.id = "test";
                panel.content.append(div);
                const node = document.getElementById("test");
                console.log(node)
                ReactDOM.render(
                    <React.StrictMode>
                        <Provider store={store}>
                            <LayerPanel map={map} setMap={setMap} />
                        </Provider>
                    </React.StrictMode>
                    ,node
                )
            },
        });
    }

    const displayLayerPanel = () => {
        if (displayPanel) {
            if (map) {
                setTimeout(function(){ map.invalidateSize()}, 1);
            }
            return (
                <div className='layer-panel-container'>
                    <LayerPanel map={map} setMap={setMap}/>
                </div>
            )
        } else {
            setTimeout(function(){ map.invalidateSize()}, 1);
        }
    }

    return (
        <div className='glow-globe'>
            <MenuBar/>
            <div className='body'>
                <div className='map-and-chart'>
                    <Map map={map} setMap={setMap}/>
                    <Chart/>
                </div>
                <Button onClick={() => create()} style={!displayPanel ? {display: 'none'} : {}}>Undock Layer Panel</Button>
                {displayLayerPanel()}
            </div>
            <Footer/>
        </div>
    )
}

export default GlowGlobe