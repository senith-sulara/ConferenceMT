import React, {Component} from 'react';


export default class Logout extends Component {

    componentDidMount(){
        localStorage.removeItem('WKCLogged');
        localStorage.removeItem('AttendeeCLogged');
        localStorage.removeItem('ResearcherCLogged');
        localStorage.removeItem('AdminLogged');
        localStorage.removeItem('UserLogged');
        localStorage.clear();
        this.props.history.push('/');
        window.location.reload();
    }
    render() {

        return (
            <div>
            </div>
        );
    }

}
