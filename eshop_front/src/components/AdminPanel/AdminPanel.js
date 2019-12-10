import React from 'react';
import './AdminPanel.css';
import SideBarAdminPanel from "./SideBarAdminPanel";
import UsersTableContainer from "./Tables/UsersTable/UsersTableContainer";


const AdminPanel = (props) => {

    return (
        <div className="adminPanelContainer">
            <SideBarAdminPanel user = {props.user}
                               adminPanel = {props.adminPanel}/>

            <div className="mainAdminPanel">
                <UsersTableContainer />
            </div>

        </div>
    )
};

export default AdminPanel;