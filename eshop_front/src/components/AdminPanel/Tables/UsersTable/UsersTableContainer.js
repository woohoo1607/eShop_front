import React from 'react';
import {connect} from "react-redux";
import "./UsersTable.css";
import UsersTable from "./UsersTable";
import {getUsersData} from "../../../../reducers/adminPanelReducer";


class UsersTableContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersData(this.props.adminPanel.users.currentPage);
    }

    updateUserData = (currentPage) => {
        let countPages = Math.ceil(this.props.adminPanel.users.usersCount/10);
        let thisPage = this.props.adminPanel.users.currentPage;
        if (currentPage==="Next") {
            if (thisPage<countPages) {
                this.props.getUsersData(thisPage+1);
            }
        } else if (currentPage==="Previous") {
            if (thisPage>1) {
                this.props.getUsersData(thisPage-1);
            }
        } else {
            this.props.getUsersData(currentPage);
        }
    };

    state = {
        isActiveEdit: false         //для запрета активации редактирование двух строк
    };

    activeteEdit = () => {
        this.setState( {
            isActiveEdit: true
        });
    };

    deactiveteEdit = () => {
        this.setState( {
            isActiveEdit: false
        });
    };

    addPaginationPagesToArr = (start, end, acc) => {
      if (start>end) {
          acc.push("Next");
          return acc;
      }
      acc.push(start);
      return this.addPaginationPagesToArr(start+1, end, acc)
    };


    render () {
        let countPages = Math.ceil(this.props.adminPanel.users.usersCount/10);
        let currentPage = this.props.adminPanel.users.currentPage;
        let pagination = ["Previous"];
        if (countPages<=10) {
            this.addPaginationPagesToArr(1, countPages, pagination);
        } else if (countPages>10 && currentPage<=6) {
            this.addPaginationPagesToArr(1, 10, pagination);
        } else if (countPages>10 && currentPage>6 && currentPage+4<=countPages) {
            this.addPaginationPagesToArr(currentPage-5, currentPage+4, pagination);
        } else {
            this.addPaginationPagesToArr(countPages-10, countPages, pagination);
        }
        return (
            <UsersTable adminPanel = {this.props.adminPanel}
                        updateUserData = {this.updateUserData}
                        pagination = {pagination}
                        activeteEdit={this.activeteEdit}
                        deactiveteEdit={this.deactiveteEdit}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        adminPanel: state.adminPanel
    }
};

export default connect(mapStateToProps, {getUsersData})(UsersTableContainer);