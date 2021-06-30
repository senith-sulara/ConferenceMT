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
        // this.getAllTours = this.getAllTours.bind(this);
        // this.getAllBookedTours = this.getAllBookedTours.bind(this);
        // this.getAllTours();
        // this.getAllBookedTours();
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
                                {/*<strong>{this.state.tourListStatus ?this.state.tourList.length :*/}
                                {/*    ''}</strong>*/}
                            </h4>
                        </div>
                    </div>
                    {/*<MDBCardBody>*/}
                    {/*<div className="progress">*/}
                    {/*<div aria-valuemax="100" aria-valuemin="0" aria-valuenow={this.state.tourListStatus ?this.state.tourList.length : ''} className="progress-bar bg-primary" role="progressbar"*/}
                    {/*style={{width: this.state.tourListStatus ?this.state.tourList.length : ''}}></div>*/}
                    {/*</div>*/}
                    {/*</MDBCardBody>*/}
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
                                {/*<strong>{this.state.bookedTourListStatus ?this.state.bookedTourList.length :*/}
                                {/*    ''}</strong>*/}

                            </h4>
                        </div>
                    </div>

                </MDBCard>
            </MDBContainer>
        );
    }

}

