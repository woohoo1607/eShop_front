import React from 'react';
import "./UsersTable.css";

const UsersTable = (props) => {
    let getSN = (cnt, page) => {
        let result = [];
        if (cnt===10) {
            let maxNumber = page*10;
            for (let i=9; i>=0; i--) {
                result.push(maxNumber-i);
            }
        } else {
            let maxNumber = (page-1)*10+cnt;
            for (let i=cnt-1; i>=0; i--) {
                result.push(maxNumber-i);
            }
        }
        return result;
    };
    let usersSerialNumbers = getSN(props.adminPanel.users.usersData.length, props.adminPanel.users.currentPage);

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
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {props.adminPanel.users.usersData
                    .map((user,i) => <tr key={user.id}>
                        <td>{usersSerialNumbers[i]}</td>
                        <td>{user.login}</td>
                        <td>{user.firstname}</td>
                        <td>{user.surname}</td>
                        <td>{user.email}</td>
                        <td>{user.phonenumber}</td>
                        <td>{user.isadmin ? "True" : "False"}</td>
                        <td><button>edit</button><button>delete</button></td>
                    </tr>)}
                </tbody>
            </table>
            <div className="tableFooter">
                <div className="tableInfo">
                    Showing {usersSerialNumbers[0]} to {usersSerialNumbers[props.adminPanel.users.usersData.length-1]} of {props.adminPanel.users.usersCount} entries
                </div>
                <div className="tablePaginator">
                    <ul className="pagination">
                        {props.pagination.map(page=> <li key={page} className="paginationButton">
                            <div key={page} onClick={()=> {props.updateUserData(page)}} className={page===props.adminPanel.users.currentPage ? "activePaginationButton" : ""}>
                                {page}
                            </div></li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default UsersTable;