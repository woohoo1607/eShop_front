import React from 'react';
import './AdminPanel.css';
import SideBarAdminPanel from "./SideBarAdminPanel";


const AdminPanel = (props) => {

    return (
        <div className="adminPanelContainer">
            <SideBarAdminPanel user = {props.user}
                               adminPanel = {props.adminPanel}/>

            <div className="mainAdminPanel">

            </div>

        </div>
    )
};

export default AdminPanel;