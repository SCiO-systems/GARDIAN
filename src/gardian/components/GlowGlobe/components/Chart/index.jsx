import React from 'react'
import {ChartLimited, ChartModerate, ChartHigh} from "./components";
import { Dropdown } from 'primereact/dropdown';
import {useDispatch, useSelector} from "react-redux";
import {Actions} from "../../../../reducer/actions";
import './styles.css'

const Chart = () => {

    const dispatch = useDispatch();

    const conflictLevel = useSelector((state) => state.conflictLevel)
    const setConflictLevel = (payload) => dispatch({ type: Actions.SetConflictLevel, payload });

    const conflictLevels = [
        'Limited',
        'Moderate',
        'High',
    ];

    const renderCorrectChart = () => {
        switch (conflictLevel) {
            case "Limited":
                return <ChartLimited/>
            case "Moderate":
                return <ChartModerate/>
            case "High":
                return <ChartHigh/>
            default:
                return <ChartLimited/>
        }
    }

    return (
        <div className='chart'>
            <div className='level-selector'>
                <h3>Conflict Rate</h3>
                <Dropdown value={conflictLevel} options={conflictLevels} onChange={(e) => setConflictLevel(e.value)} placeholder="Select Conflict Rate" />
            </div>
            {renderCorrectChart()}
        </div>
    )
}

export default Chart