import React, {Component} from 'react';
import {
    MDBCard,
    MDBCardBody,MDBCardText, MDBContainer, MDBIcon
} from "mdbreact";

export class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tourList: [],
            tourListStatus: false,
            tourCount :0,
            bookedTourList: [],
            bookedTourListStatus: false,
            bookedTourCount :0
        }

    }

    render() {
        return (
            <MDBContainer>
                <MDBCard className="cascading-admin-card">
                    <div className="admin-up">
                        <MDBIcon icon="money-bill-alt" className="primary-color"/>
                        <div className="data">
                            <h3 className="h1 text-left mb-4">Total Research Papers</h3>
                            <h4>
                            </h4>
                        </div>
                    </div>
                </MDBCard>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <MDBCard className="cascading-admin-card">
                    <div className="admin-up">
                        <MDBIcon icon="chart-line" className="warning-color"/>
                        <div className="data">
                            <h3 className="h1 text-left mb-4">Total Workshops</h3>
                            <h4>
                            </h4>
                        </div>
                    </div>

                </MDBCard>
            </MDBContainer>
        );
    }

}

