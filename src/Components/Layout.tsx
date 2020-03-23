import * as React from 'react';
import NavMenu from './NavMenu';
import Sidebar from './Sidebar';

export default (props: { children?: React.ReactNode }) => (
    <React.Fragment>
        <NavMenu />
        <div className="d-flex arg-body">
            <Sidebar />
            <div className="arg-body__content">
                {props.children}
            </div>
        </div>
    </React.Fragment>
);
