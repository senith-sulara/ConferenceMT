import React, {Component} from 'react';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBModalBody,
    MDBRow,
} from "mdbreact";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import {saveWorkshop} from "../../services/workshop.service";

export class WKC extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            modal: false,
            workShop: '',
            date: '',
            time: '',
            fees: '',
            conductor: '',
            email: '',
            contact: '',
        };

        this.onClick = this.onClick.bind(this);
        this.onChangeWorkShop = this.onChangeWorkShop.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangeFees = this.onChangeFees.bind(this);
        this.onChangeConductor = this.onChangeConductor.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChangeWorkShop(event) {
        console.log(event.target.value)
        this.setState({
            workShop: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangeDate(event) {
        console.log(event.target.value)
        this.setState({
            date: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangeTime(event) {
        console.log(event.target.value)
        this.setState({
            time: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangeFees(event) {
        console.log(event.target.value)
        this.setState({
            fees: event.target.value,
            [event.target.name]: event.target.value
        })
    }


    onChangeConductor(event) {
        console.log(event.target.value)
        this.setState({
            conductor: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangeEmail(event) {
        this.setState({
            email: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangeContact(event) {
        this.setState({
            contact: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    submitWorkshop(event) {
        event.preventDefault();
        event.target.className += " was-validated";
        if (this.state.workShop != '') {
            if (this.state.date != '') {
                if (this.state.time != '') {
                    if (this.state.fees != '') {
                        if (this.state.conductor != '') {
                            const workshopDetail = {
                                workShop: this.state.workShop,
                                date: this.state.date,
                                time: this.state.time,
                                fees: this.state.fees,
                                conductor: this.state.conductor,
                                email: this.state.email,
                                contact: this.state.contact,
                                user: localStorage.getItem("CustomerId"),
                                status:'pending'
                            }
                            console.log(workshopDetail);


                            saveWorkshop(workshopDetail).then(res => {
                                if (res.data.success === 'successful') {
                                    this.setState({
                                        workShop: '',
                                        date: '',
                                        time: '',
                                        fees: '',
                                        conductor: '',
                                        email: '',
                                        contact: '',
                                    })
                                    Swal.fire(
                                        '',
                                        'Added Success',
                                        'success'
                                    )
                                } else {
                                    Swal.fire(
                                        '',
                                        'Added fail',
                                        'error'
                                    )
                                }
                            }).catch(error => console.error(error));

                        } else {
                        }
                    } else {
                    }

                } else {
                }

            } else {
            }
        } else {
        }
    };


    render() {
        return (
            <MDBModalBody>
                <MDBCard>
                    <MDBCardBody className="mx-2">
                        <div className="text-center">
                            <h2 className="workshoph2 mb-1">
                                <strong className="workshoptitle">Workshop</strong>
                            </h2>
                        </div>
                        <form className="needs-validation" onSubmit={this.submitWorkshop.bind(this)} noValidate>
                            <MDBRow>
                                <label htmlFor="workshopid" className="grey-text">Workshop Title</label>
                                <input value={this.workShop}
                                       name="workShop"
                                       onChange={this.onChangeWorkShop}
                                       type="text" id="workshopid" className="form-control"
                                       placeholder="Workshop Title" required/>
                                <div className="invalid-feedback">Please Provide the Workshop Title.</div>
                                <label htmlFor="dateid" className="grey-text">Date</label>
                                <input value={this.date}
                                       name="date"
                                       onChange={this.onChangeDate}
                                       type="text" id="dateid" className="form-control"
                                       placeholder="Date" required/>
                                <label htmlFor="timeid" className="grey-text">Time</label>
                                <input value={this.time}
                                       name="time"
                                       onChange={this.onChangeTime}
                                       type="text" id="timeid" className="form-control"
                                       placeholder="Time" required/>
                                <label htmlFor="feesid" className="grey-text">Fees</label>
                                <input value={this.fees}
                                       name="fees"
                                       onChange={this.onChangeFees}
                                       type="text" id="feesid" className="form-control"
                                       placeholder="Fees" required/>
                                <div className="invalid-feedback">Please Provide the Fees.</div>
                                <label htmlFor="conductorid" className="grey-text">Conductor Name</label>
                                <input value={this.conductor}
                                       name="conductor"
                                       onChange={this.onChangeConductor}
                                       type="text" id="conductorid" className="form-control"
                                       placeholder="Conductor Name" required/>
                                <label htmlFor="emailid" className="grey-text">Email</label>
                                <input value={this.email}
                                       onChange={this.onChangeEmail}
                                       type="email"
                                       id="emailid" className="form-control"
                                       name="email"
                                       placeholder="Your Email address" required/>
                                <div className="invalid-feedback">Please provide an email.</div>
                                <label htmlFor="contactid" className="grey-text">Contact number</label>
                                <input value={this.contact}
                                       onChange={this.onChangeContact}
                                       type="number"
                                       id="contactid" className="form-control"
                                       name="contact"
                                       placeholder="Contact number" required/>
                                <div className="invalid-feedback">Please Provide an Contact Number.</div>
                            </MDBRow>

                            <br/>

                            <br></br>
                            <MDBBtn gradient="blue" rounded className="btn-block z-depth-1a" type="submit">
                                Workshop Add
                            </MDBBtn>
                        </form>
                    </MDBCardBody>
                </MDBCard>
            </MDBModalBody>
        );
    }

}

