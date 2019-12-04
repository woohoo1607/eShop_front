import React from 'react';
import userPhoto from "../../img/user-male-icon.png";
import {NavLink} from "react-router-dom";

const SideBarAdminPanel = (props) => {
console.log(props);
    return (
        <div className="sidebarAdmin">
            <ul className="nav">
                <li>
                    <div className="navLink">
                        <div className="profilePhoto">
                            <img src={userPhoto} alt="userPhoto" />
                        </div>
                        <div className="profileName">
                            <p className="name">{props.user.firstname + ' ' + props.user.surname}</p>
                            <p className="designation">Admin</p>
                        </div>
                        <div className="notification">
                            menu
                        </div>
                    </div>
                </li>
                <li><NavLink to="/admin" className="navLink">Dashboard</NavLink></li>
                <li><NavLink to="/admin/orders" className="navLink">Orders</NavLink></li>
                <li><NavLink to="/admin/users" className="navLink">Users</NavLink></li>
                <li><NavLink to="/admin/categorys" className="navLink">Categorys</NavLink></li>
                <li><NavLink to="/admin/products" className="navLink">Products</NavLink></li>
                <li><NavLink to="/admin/contacts" className="navLink">Contacts</NavLink></li>
            </ul>
        </div>
    )
};

export default SideBarAdminPanel;