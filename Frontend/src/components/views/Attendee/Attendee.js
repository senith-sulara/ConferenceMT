import React, {Component} from "react";
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBRow} from "mdbreact";
import {findallWorkshop} from "../../services/workshop.service";

export class Attendee extends Component {


    constructor(props) {
        super(props);
        this.state = {
            workshopList: [],
            workshopListStatus: false
        }
        this.getAllWorkshopList = this.getAllWorkshopList.bind(this);
        this.getAllWorkshopList();
    }

    paymentPage = () => {
        let id = '';
        let name = '';
        let amount = '';
        this.state.workshopList.map(wsc => {
            id = wsc._id;
            name = wsc.workShop;
            amount = wsc.fees;
        });
        this.props.history.push({
            pathname: '/wkcpayment',
            wsId: id,
            wsName: name,
            wsAmount: amount,
        })
    }

    getAllWorkshopList() {
        findallWorkshop().then(res => {
            console.log(res.data)
            this.setState({
                workshopList: res.data,
                workshopListStatus: true
            })
        }).catch(error => console.error(error));
    }


    render() {
        return (
            <MDBRow className="justify-content-center">
                <MDBCol md="6" lg="9">
                    <section className="text-center pb-3">
                        <MDBRow className="d-flex justify-content-center">
                            {
                                this.state.workshopListStatus ?
                                    this.state.workshopList.map(wsc => {
                                        console.log(wsc.date)
                                        return (
                                            <div className="col-sm-4 cardMarginTop">
                                                <MDBCard className="d-flex mb-5">
                                                    <MDBCardBody>
                                                        <MDBCardTitle className="font-bold mb-3">
                                                            <strong>{wsc.workShop}</strong>
                                                        </MDBCardTitle>
                                                        <MDBCardText>Some quick example text to build on the card
                                                            title
                                                            and make up the bulk of the card's
                                                            content.</MDBCardText>
                                                        <span className="h5 text-right mb-4">Date</span> :<span
                                                        style={{fontWeight: "bold"}}>{wsc.date}</span>
                                                        <br/>
                                                        <span className="h5 text-left mb-4">Time</span> :<span
                                                        style={{fontWeight: "bold"}}>{wsc.time}</span>
                                                        <br/>
                                                        <span className="h5 text-left mb-4">Fees</span> :<span
                                                        style={{fontWeight: "bold"}}>LKR: {wsc.fees}</span>
                                                        <br/>
                                                        <span
                                                            className="h5 text-left mb-4">Conductor</span>: <span
                                                        style={{fontWeight: "bold"}}>{wsc.conductor}</span>
                                                        <br/>
                                                        <span className="h5 text-left mb-4">Email</span> :<span
                                                        style={{fontWeight: "bold"}}>{wsc.email}</span>
                                                        <br/>
                                                        <span className="h5 text-left mb-4">Contact Number</span> :<span
                                                        style={{fontWeight: "bold"}}>{wsc.contact}</span>
                                                        <br/>
                                                        <MDBBtn outline color="info" size="sm" onClick={this.paymentPage}>
                                                            Join</MDBBtn>
                                                    </MDBCardBody>
                                                </MDBCard>
                                            </div>
                                        )
                                    })
                                    : ''
                            }
                        </MDBRow>
                    </section>
                </MDBCol>
            </MDBRow>
        );
    }

}