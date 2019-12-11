import React from 'react';
import "./UsersTable.css";
import EditTableLine from "./EditTableLine";



class TableLine extends React.Component {

    state = {
        editMode: false,
        user: {
            id: this.props.user.id,
            login: this.props.user.login,
            firstname: this.props.user.firstname,
            surname: this.props.user.surname,
            email: this.props.user.email,
            phonenumber: this.props.user.phonenumber,
            isadmin: this.props.user.isadmin
        },
        isFetching: false
    };

    componentDidUpdate (prevProps, prevState) {
        if (prevProps !== this.props) {
            this.setState({
                user: this.props.user,
            })
        }
        if (this.state.isFetching) {
            if (!this.props.isFetching) {
                this.setState({
                    isFetching: false
                });
            }
        }
    }

    activatedEditMode = () => {
        if (!this.props.isActiveEdit) {
            this.props.activeteEdit();
            this.setState( {
                editMode: true
            });
        }
    };

    deactivatedEditMode = () => {
        this.props.deactiveteEdit();
        this.setState( {
            editMode: false,
            isFetching: true
        });
    };

    render () {
        return (
            <>
                {this.state.editMode && <EditTableLine user={this.state.user} deactivated={this.deactivatedEditMode} usersSerialNumbers={this.props.usersSerialNumbers} i={this.props.i}/>}
                <tr>
                    <td>{this.props.usersSerialNumbers[this.props.i]}</td>
                    <td>{this.props.user.login}</td>
                    <td>{this.props.user.firstname}</td>
                    <td>{this.props.user.surname}</td>
                    <td>{this.props.user.email}</td>
                    <td>{this.props.user.phonenumber}</td>
                    <td>{this.props.user.isadmin ? "True" : "False"}</td>
                    <td>
                        <button onClick={()=>this.activatedEditMode()} className="tableButton editStringButton"><i>Edit</i></button>
                        <button className="tableButton deleteStringButton"><i>Delete</i></button>
                    </td>
                </tr>
            </>
        )
    }
}

export default TableLine;