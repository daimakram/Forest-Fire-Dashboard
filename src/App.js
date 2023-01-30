import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom"
// import Register from "../components/Authentication/register";
// import NewPassword from "../components/Authentication/newPassword";
// import ResendPassword from "../components/Authentication/resendPassword";
import MessageSnackbar from "./reusable_components/SnackBar";
import ResetPassword from "./Authentication/ResetPassword";
import Home from "./pages/Home";
import ProtectedRoute from "./Authentication/ProtectedRoute";
import Login from './components/Login';
import Logout from "./Authentication/Logout";
import TopAppBarProtection from "./Headers/TopAppBar/TopAppBarProtection";
import TopAppBar from "./Headers/TopAppBar/TopAppBar";
import NotFound from "./reusable_components/NotFound";
import ReactSpinner from "./reusable_components/ReactSpinner";
import Cameras from "./pages/Cameras";
import OnlyPublicRoute from "./Authentication/OnlyPublicRoute";
import GoogleMap from "./components/GoogleMap.js";
import testing from "./components/testing";
import Camera from './components/camera';
import SensorPage from './components/SensorPage';

export const backend_url = 'http://139.162.11.234'


export default function App () {
        return (
            <React.Fragment>
                <TopAppBarProtection Component={TopAppBar} />
                <ReactSpinner/>
                <Switch>
                <ProtectedRoute exact path='/' Component={GoogleMap} />
                <OnlyPublicRoute exact path='/login' Component={Login} />
                <OnlyPublicRoute exact path="sensor/:id" Component={SensorPage} />
                <OnlyPublicRoute exact path="camera/:id" Component={Camera} />
                {/* <ProtectedRoute exact path='/' Component={Home} />
                <ProtectedRoute exact path='/cameras' Component={Cameras} />
                <OnlyPublicRoute exact path='/arand' Component={GoogleMap} />
                <OnlyPublicRoute exact path='/testing' Component={testing} />
                <Route exact path='/logout' render={(props) => <Logout {...props}/>}/>
                <Route path='/reset-password' render={(props) => <ResetPassword {...props}/>}/> */}
                {/*    <Route exact path='/register' render={(props) => <Register {...props}/>}/>*/}
                {/*    <Route path='/new-password/:token' render={(props) => <NewPassword {...props}/>}/>*/}
                {/*    <Route exact path='/resend/new-password' render={(props) => <ResendPassword {...props}/>}/>*/}
                <Route path='/not-found' component={NotFound}/>
                <Redirect to='/not-found'/>
                </Switch>
                <MessageSnackbar/>
            </React.Fragment>
        );
}

