import React from 'react';

export const AppBreadcrumb = (props) => {

    const { location } = props;

    return (
        <div className="layout-breadcrumb">
            <ul>
                <li><button className="p-link" onClick={() => window.location = "/#"} ><i className="pi pi-home"></i></button></li>
                <li><i class="pi pi-chevron-right chevron-icon"></i></li>
                <li>{location.pathname.split('/')[1]}</li>
            </ul>
        </div>
    );

}