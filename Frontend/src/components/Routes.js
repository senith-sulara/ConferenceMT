import React from 'react';
import {Route, Switch} from 'react-router-dom';

import UserAdd from "./views/Admin/UserAdd";
import {Dashboard} from "./views/Admin/Dashboard";
import Logout from "./views/LogOut/Logout";
import {WKC} from "./views/WKC/WKC";
import {Researcher} from "./views/Researcher/Researcher";
import {Attendee} from "./views/Attendee/Attendee";
import WorkShopPayment from "./views/Payment/WorkShopPayment";
import {RPList} from "./views/Researcher/RPList";
import PublicationPayment from "./views/Payment/PublicationPayment";
import UserRemove from "./views/Admin/UserRemove";

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path='/' exact component={Dashboard}/>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/useradd' component={UserAdd}/>
                <Route path='/userrem' component={UserRemove}/>
                <Route path='/researcher' component={Researcher}/>
                <Route path='/rplist' component={RPList}/>
                <Route path='/rppayment' component={PublicationPayment}/>
                <Route path='/attendee' component={Attendee}/>
                <Route path='/wkc' component={WKC}/>
                <Route path='/wkcpayment' component={WorkShopPayment}/>
                <Route exact path='/logout' component={Logout}/>

            </Switch>
        );
    }
}

export default Routes;
