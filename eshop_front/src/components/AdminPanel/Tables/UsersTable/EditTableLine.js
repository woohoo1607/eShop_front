import React from 'react';
import {reduxForm, Field} from "redux-form";
import {Input} from "../../../FormsControls/FormControls";

const EditLineForm = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div className="inputContainer">
                <p className="inputName">Login</p>
                <Field name="login" component={Input} placeholder="login"/>
            </div>
            <div className="inputContainer">
                <p className="inputName">Firstname</p>
                <Field name="firstname" component={Input} placeholder="firstname"/>
            </div>
            <div className="inputContainer">
                <p className="inputName">Surname</p>
                <Field name="surname" component={Input} placeholder="surname"/>
            </div>
            <div className="inputContainer">
                <p className="inputName">email</p>
                <Field name="email" component={Input} placeholder="email"/>
            </div>
            <div className="inputContainer">
                <p className="inputName">phonenumber</p>
                <Field name="phonenumber" component={Input} placeholder="phonenumber"/>
            </div>
            <div className="inputContainer">
                <p className="inputName">isAdmin?</p>
                <Field name="isadmin" component={Input} type="checkbox" placeholder="isadmin"/>
            </div>
            <div className="inputContainer buttonsContainer">
                <button className="tableButton saveStringButton">Save</button>
                <button onClick={props.deactivated} className="tableButton cancelStringButton">Cancel</button>
            </div>
        </form>
    )
};

const EditLineReduxForm = reduxForm({form: 'editTableLine'})(EditLineForm);

const EditTableLine = (props) => {
    const onSubmit = (formData) => {
      console.log(formData);
    };
    return (
        <div className="editTableLine">
            <div className="editTableLineContainer">
            <h3>Edit data <b><i>{props.user.login}</i></b></h3>
            <EditLineReduxForm onSubmit={onSubmit} deactivated={props.deactivated} initialValues={props.user}/>
            </div>
        </div>
    )
};


export default EditTableLine;