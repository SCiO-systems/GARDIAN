import React from "react";
import {Dialog} from "primereact/dialog";
import {Tooltip} from "primereact/tooltip";

export const DocViewer = () => {

    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);

        if (position) {
            setPosition(position);
        }
    }

    const dialogFuncMap = {
        'displayBasic': setDisplayBasic,
    }

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }

    let newDivList = [];
    if(data.locked === false){
        newDivList.push(
            <div>
                    <span style={{color: "#457fca"}}>
                        <Tooltip target=".view-icon"/>
                        <a onClick={() => onClick('displayBasic')}><i className="fad fa-eye fa-3x view-icon" data-pr-tooltip="View" ></i> </a>
                        <Dialog visible={displayBasic} position={position} style={{ width: '70vw' }}  onHide={() => onHide('displayBasic')}>
                            <center><h2>VIEW</h2></center>
                            <DocViewer documents={docs} />
                        </Dialog>
                        <Tooltip target=".download-icon"/>
                        <i className="fad fa-file-download fa-3x download-icon" data-pr-tooltip="Download" style={{marginLeft: "15px" }}></i>
                    </span>
            </div>);
    }else{
        newDivList.push( <div><span style={{color: "#f58211"}}><Tooltip target=".locked-icon"/><i className="fad fa-user-lock fa-3x locked-icon" data-pr-tooltip="Locked file" ></i></span></div>);
    }
    return  newDivList;

    return (
        <>
            <Dialog visible={displayBasic} position={position} style={{ width: '70vw' }}  onHide={() => onHide('displayBasic')}>
                <center><h2>VIEW</h2></center>
                <DocViewer documents={docs} />
            </Dialog>
        </>
    );
}
