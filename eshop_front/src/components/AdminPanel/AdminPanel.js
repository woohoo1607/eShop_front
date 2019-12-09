import React from 'react';
import './AdminPanel.css';
import SideBarAdminPanel from "./SideBarAdminPanel";
import UsersTable from "./Tables/UsersTable/UsersTable";


const AdminPanel = (props) => {

    return (
        <div className="adminPanelContainer">
            <SideBarAdminPanel user = {props.user}
                               adminPanel = {props.adminPanel}/>

            <div className="mainAdminPanel">
                <UsersTable adminPanel = {props.adminPanel}/>
            </div>

        </div>
    )
};

export default AdminPanel;