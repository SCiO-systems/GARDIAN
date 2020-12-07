import React from 'react';
import { useHistory, useLocation, withRouter } from 'react-router-dom';

const AppBreadcrumb = () => {

    const location = useLocation();
    const history = useHistory();

    return (
        <div className="layout-breadcrumb">
            <ul>
                <li><button type="button" className="p-link" onClick={() => history.push('/')} ><i className="pi pi-home"></i></button></li>
                <li><i className="pi pi-chevron-right chevron-icon"></i></li>
                <li>{location.pathname.split('/')[1]}</li>
            </ul>
        </div>
    );
}

export default withRouter(AppBreadcrumb);
