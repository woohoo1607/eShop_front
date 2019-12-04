import React from 'react';
import AdminPanel from "./AdminPanel";
import {connect} from "react-redux";
import {getUserData} from "../../reducers/userReducer";
import {getUsersData} from "../../reducers/adminPanelReducer";


class AdminPanelContainer extends React.Component {
    componentDidMount() {
        this.props.getUserData();
        this.props.getUsersData();
    }

    render() {
        return (
            <div>
                <AdminPanel user = {this.props.user}
                            adminPanel = {this.props.adminPanel}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        user: state.user,
        adminPanel: state.adminPanel
    }
};

export default connect(mapStateToProps, {getUserData, getUsersData})(AdminPanelContainer);
