import React from 'react';
import logo from "../assets/sidebar.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

const TopNavigation = () => {
    return (
        <div className="sidebar-fixed position-fixed">
            <a href="#!" className="logo-wrapper waves-effect">
                {/*<img alt="MDB React Logo" className="img-fluid" src={logo}/>*/}
                <h4 style = {{marginTop:80, marginBottom:10}}>Conference Management System</h4>
            </a>
            <MDBListGroup className="list-group-flush">
                {
                    localStorage.getItem("AdminLogged") === "AdminLogged" ?
                        <NavLink exact={true} to="/dashboard" activeClassName="activeClass">
                            <MDBListGroupItem>
                                <MDBIcon icon="chart-pie" className="mr-3"/>
                                Dashboard
                            </MDBListGroupItem>
                        </NavLink> : ''
                }
                {
                    localStorage.getItem("AdminLogged") === "AdminLogged" ?
                        <NavLink to="/useradd" activeClassName="activeClass">
                            <MDBListGroupItem>
                                <MDBIcon icon="user-alt" className="mr-3"/>
                                User Add
                            </MDBListGroupItem>
                        </NavLink> : ''
                }
                {
                    localStorage.getItem("AdminLogged") === "AdminLogged" ?
                        <NavLink to="/userrem" activeClassName="activeClass">
                            <MDBListGroupItem>
                                <MDBIcon icon="user-alt" className="mr-3"/>
                                User Remove
                            </MDBListGroupItem>
                        </NavLink> : ''
                }
                {/*{*/}
                {/*    localStorage.getItem("AdminLogged") === "AdminLogged" ?*/}
                {/*        <NavLink to="/touradd" activeClassName="activeClass">*/}
                {/*            <MDBListGroupItem>*/}
                {/*                <MDBIcon icon="table" className="mr-3"/>*/}
                {/*                Tour Add*/}
                {/*            </MDBListGroupItem>*/}
                {/*        </NavLink> : ''*/}
                {/*}*/}

                {/*{*/}
                {/*    localStorage.getItem("AdminLogged") === "AdminLogged" ?*/}
                {/*        <NavLink to="/tourviewadmin" activeClassName="activeClass">*/}
                {/*            <MDBListGroupItem>*/}
                {/*                <MDBIcon icon="map" className="mr-3"/>*/}
                {/*                Tour View*/}
                {/*            </MDBListGroupItem>*/}
                {/*        </NavLink> : ''*/}
                {/*}*/}
                {
                    localStorage.getItem("WKCLogged") === "WKCLogged" ?
                        <NavLink to="/wkc" activeClassName="activeClass">
                            <MDBListGroupItem>
                                <MDBIcon icon="map" className="mr-3"/>
                                Workshop Add
                            </MDBListGroupItem>
                        </NavLink>: ''
                }

                {
                    localStorage.getItem("AttendeeCLogged") === "AttendeeCLogged" ?
                        <NavLink to="/attendee" activeClassName="activeClass">
                            <MDBListGroupItem>
                                <MDBIcon icon="table" className="mr-3"/>
                                Workshop List
                            </MDBListGroupItem>
                        </NavLink>: ''
                }

                {
                    localStorage.getItem("ResearcherCLogged") === "ResearcherCLogged" ?
                        <NavLink to="/researcher" activeClassName="activeClass">
                            <MDBListGroupItem>
                                <MDBIcon icon="table" className="mr-3"/>
                                 RP Submit
                            </MDBListGroupItem>
                        </NavLink>: ''
                }
                {
                    localStorage.getItem("ResearcherCLogged") === "ResearcherCLogged" ?
                        <NavLink to="/rplist" activeClassName="activeClass">
                            <MDBListGroupItem>
                                <MDBIcon icon="table" className="mr-3"/>
                                RP List
                            </MDBListGroupItem>
                        </NavLink>: ''
                }

                <NavLink to="/logout" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="sign-out-alt" className="mr-3"/>
                        LogOut
                    </MDBListGroupItem>
                </NavLink>
            </MDBListGroup>
        </div>
    );
}

export default TopNavigation;