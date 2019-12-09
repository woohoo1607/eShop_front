import React from 'react';
import {NavLink} from "react-router-dom";
import "./UsersTable.css";

const UsersTable = (props) => {
    console.log(props);
    return (
        <div className="tableContainer">
            <h3>Users Table</h3>
            <div className="clr">
                <input type="search" placeholder="Search" className="searchTable"/>
            </div>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Login</th>
                    <th>name</th>
                    <th>last name</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>isAdmin</th>
                </tr>
                </thead>
                <tbody>
                {props.adminPanel.users.usersData
                    .map(user => <tr key={user.id}>
                        <td></td>
                        <td>{user.login}</td>
                        <td>{user.firstname}</td>
                        <td>{user.surname}</td>
                        <td>{user.email}</td>
                        <td>{user.phonenumber}</td>
                        <td>{user.isadmin ? "True" : "False"}</td>
                    </tr>)}
                </tbody>
            </table>
            <div className="tableFooter">
                <div className="tableInfo">
                    Showing 1 to 10 of {props.adminPanel.users.usersCount} entries
                </div>
                <div className="tablePaginator">
                    <ul className="pagination">
                        <li className="paginationButton"><NavLink to="/admin">Previous</NavLink></li>
                        <li className="paginationButton"><NavLink to="/admin" className="activePaginationButton">1</NavLink></li>
                        <li className="paginationButton"><NavLink to="/admin">2</NavLink></li>
                        <li className="paginationButton"><NavLink to="/admin">Next</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default UsersTable;