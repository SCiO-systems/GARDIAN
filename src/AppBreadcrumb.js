import React from 'react';
import { useHistory, useLocation, withRouter } from 'react-router-dom';

const AppBreadcrumb = () => {

    const location = useLocation();
    const history = useHistory();
    let pathname;

    const capitalize = (s) => {
        return s[0].toUpperCase() + s.slice(1);
    }

    if (location.pathname === '/') {
        pathname = 'Dashboard'
    } else {
        pathname = capitalize(location.pathname.split('/')[1]);
    }

    return (
        <div className="layout-breadcrumb">
            <ul>
                <li><button type="button" className="p-link" onClick={() => history.push('/')} ><i className="pi pi-home"></i></button></li>
                <li><i className="pi pi-chevron-right chevron-icon"></i></li>
                <li><button className="p-link">{pathname}</button></li>
            </ul>
        </div>
    );
}

export default withRouter(AppBreadcrumb);
