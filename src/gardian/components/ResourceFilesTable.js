import React, {useEffect, useRef, useState} from "react";
import {DataTable} from "primereact/components/datatable/DataTable";
import {Column} from "primereact/column";
import {Button} from "primereact/button";
import {Toast} from "primereact/toast";
import {Tooltip} from "primereact/tooltip";

export const RelevantTable = (props) => {

    const [data, setData] = useState(null);
    const [expandedRows, setExpandedRows] = useState(null);
    // const summary = expandedRows !== null ? 'All Rows Expanded' : 'All Rows Collapsed';
    // toast.current.show({severity: 'success', summary: `${summary}`, life: 3000});
    const urlPath =  '/#/dataset/';

    useEffect(() => {
        if (props.dataRelevant) {
            setData(props.dataRelevant);
            console.log(data)
        }

    }, []);

    // const onRowExpand = (event) => {
    //     toast.current.show({severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000});
    // }
    //
    // const onRowCollapse = (event) => {
    //     toast.current.show({severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000});
    // }


    const imageBodyTemplate = (data) => {
        if(data.rights.is_open){
            return <>
                <Tooltip target=".image-table"/>
                <img src={'assets/layout/images/open.png'} data-pr-tooltip={data.rights.license} className="image-table"/>
            </>;
        } else {
            return <>
                <Tooltip target=".image-table"/>
                <img src={'assets/layout/images/close.png'} data-pr-tooltip={data.rights.license} className="image-table"/>
            </>;
        }
    }

    const titleBodyTemplate = (data) => {
        return <div className="title-column">
            <span className="image-text"><a href={urlPath + data.dataNODE_id}>{data.en_title}</a></span>
        </div>;
    }

    const rowExpansionTemplate = (data) => {
        return (
            <div className="orders-subtable">
                <DataTable value={data.en_description}>
                    <Column field="value" className="expand-table-landing" />
                </DataTable>
            </div>
        );
    }

    return (
        <div className="datatable-rowexpansion-demo">
                <DataTable value={data} expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                           rowExpansionTemplate={rowExpansionTemplate} dataKey="dataNODE_id" >
                    <Column expander style={{ width: '3em' }} />
                    <Column field="en_title" body={titleBodyTemplate} style={{ fontSize: '18px' }} />
                    <Column field="rights.is_open" body={imageBodyTemplate}  style={{width: "150px"}} />
                </DataTable>
        </div>
    );
}
