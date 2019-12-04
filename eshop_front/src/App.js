import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import AdminPanelContainer from "./components/AdminPanel/AdminPanelContainer";
import AfterHeader from "./components/AfterHeader/AfterHeader";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
  return (
      <div className="App">
        <HeaderContainer/>
        <div className="clr"></div>
        <div className="split"></div>
        <AfterHeader/>
        <Route path='/admin' render={ () => <AdminPanelContainer /> }/>
        {/*<Header />
        <div className="split"></div>
        <Route exact path='/' render = { () => <Home /> } />
        <Route path='/ecp-base' render={ () => <EcpBaseContainer /> }/>
        <Route path='/login' render={ () => <LoginContainer /> }/>*/}
      </div>

  );
}

export default App;
