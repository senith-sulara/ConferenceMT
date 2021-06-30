import React, {Component} from "react";
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBRow} from "mdbreact";
import {findallWorkshop} from "../../services/workshop.service";
import {findallAcceptedRP} from "../../services/researcher.service";

export class RPList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            RPList: [],
            RPListStatus: false,
            amount: 2500
        }
        this.getAllRPList = this.getAllRPList.bind(this);
        this.getAllRPList();
    }

    paymentPage = () => {
        let id = '';
        let name = '';
        this.state.RPList.map(rp => {
            id = rp._id;
            name = rp.fileName;

        });
        this.props.history.push({
            pathname: '/rppayment',
            rpId: id,
            rpName: name,
            rpAmount: this.state.amount,
        })
    }

    getAllRPList() {
        findallAcceptedRP(localStorage.getItem("CustomerId")).then(res => {
            console.log(res.data)
            this.setState({
                RPList: res.data,
                RPListStatus: true
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
                                this.state.RPListStatus ?
                                    this.state.RPList.map(rp => {
                                        console.log(rp.date)
                                        return (
                                            <div className="col-sm-4 cardMarginTop">
                                                <MDBCard className="d-flex mb-5">
                                                    <MDBCardBody>
                                                        <MDBCardTitle className="font-bold mb-3">
                                                            <strong>{rp.fileName}</strong>
                                                        </MDBCardTitle>
                                                        <MDBCardText>Some quick example text to build on the card
                                                            title
                                                            and make up the bulk of the card's
                                                            content.</MDBCardText>
                                                        <span className="h5 text-right mb-4">Author</span> :<span
                                                        style={{fontWeight: "bold"}}>{rp.author}</span>
                                                        <br/>
                                                        <span className="h5 text-left mb-4">Email</span> :<span
                                                        style={{fontWeight: "bold"}}>{rp.email}</span>
                                                        <br/>
                                                        <span className="h5 text-left mb-4">Contact</span> :<span
                                                        style={{fontWeight: "bold"}}>{rp.contact}</span>
                                                        <br/>
                                                        <span
                                                            className="h5 text-left mb-4">Status</span>: <span
                                                        style={{fontWeight: "bold"}}>{rp.status}</span>
                                                        <br/>
                                                        <span className="h5 text-left mb-4">Email</span> :<span
                                                        style={{fontWeight: "bold"}}>LKR: {this.state.amount}</span>
                                                        <br/>
                                                        {rp.status === 'accepted'
                                                            ?<MDBBtn outline color="info" size="sm" onClick={this.paymentPage}>Payment</MDBBtn>
                                                            :<MDBBtn disabled="disabled" outline color="#E4E4E4" size="sm" onClick={this.paymentPage}>Payment</MDBBtn>
                                                        }

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