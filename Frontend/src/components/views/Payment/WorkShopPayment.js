import React, {Component} from "react";
import Swal from "sweetalert2";
import {MDBAlert, MDBBtn, MDBCard, MDBCardBody, MDBModalBody, MDBRow} from "mdbreact";
import {saveWSPayment} from "../../services/wsPayment.service";

export default class WorkShopPayment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            modal: false,
            cardType: '',
            cardNumber: '',
            expire: '',
            cvv: '',
            holder: '',
            amount: '',
        };

        this.onClick = this.onClick.bind(this);
        this.submitWorkShopPayment = this.submitWorkShopPayment.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeCardNumber = this.onChangeCardNumber.bind(this);
        this.onChangeExpire = this.onChangeExpire.bind(this);
        this.onChangeCVV = this.onChangeCVV.bind(this);
        this.onChangeHolder = this.onChangeHolder.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);

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

    onChangeType(event) {
        console.log(event.target.value)
        this.setState({
            cardType: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangeCardNumber(event) {
        this.setState({
            cardNumber: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangeExpire(event) {
        this.setState({
            expire: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangeCVV(event) {
        this.setState({
            cvv: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangeHolder(event) {
        console.log(event.target.value)
        this.setState({
            holder: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangeAmount(event) {
        this.setState({
            amount: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    submitWorkShopPayment(event) {
        event.preventDefault();
        event.target.className += " was-validated";
        // if (this.state.cardType != '') {
        //     if (this.state.cardNumber != '') {
        //         if (this.state.expire != '') {
        //             if (this.state.cvv != '') {
        //                 if (this.state.amount != '') {
                            const WSPaymentDetails = {
                                cardType: this.state.cardType,
                                cardNumber: this.state.cardNumber,
                                expire: this.state.expire,
                                cvv: this.state.cvv,
                                holder: this.state.holder,
                                amount: this.props.location.wsAmount,
                                workshopId: this.props.location.wsId,
                                workshopName: this.props.location.wsName,
                                user: localStorage.getItem("CustomerId")
                            }
                            console.log(WSPaymentDetails);

                            saveWSPayment(WSPaymentDetails).then(res => {
                                if (res.data.success === 'successful') {
                                    this.setState({
                                        cardType: '',
                                        cardNumber: '',
                                        expire: '',
                                        cvv: '',
                                        holder: '',
                                        amount: '',
                                    })
                                    Swal.fire(
                                        '',
                                        'Added Success',
                                        'success'
                                    )

                                    this.props.history.push({
                                        pathname: '/attendee',
                                    })
                                } else {
                                    Swal.fire(
                                        '',
                                        'Added fail',
                                        'error'
                                    )
                                }
                            }).catch(error => console.error(error));

        //                 } else {
        //                 }
        //             } else {
        //             }
        //
        //         } else {
        //         }
        //
        //     } else {
        //     }
        // } else {
        // }
    };

    render() {
        const {
            submitUser, firstName, onChangeFname, email,
            onChaneEmail, onChangePassword, password, onChangeConfirmPassword, confirmpass
        } = this.props;
        return (
            <MDBModalBody>
                <MDBCard>
                    <MDBCardBody className="mx-2">
                        <div className="text-center">
                            <h2 className="loginh3 mb-1">
                                <strong className="loginh3 ">Workshop Payment</strong>
                            </h2>
                        </div>
                        <form className="needs-validation" onSubmit={this.submitWorkShopPayment} noValidate>
                            <MDBRow>
                                <label htmlFor="typeid" className="grey-text">Card Type</label>
                                <select id="typeid" name="cardType"
                                        onChange={this.onChangeType}
                                        value={this.cardType}>
                                    <option value="">Select Type</option>
                                    <option value="Visa">Visa</option>
                                    <option value="Master">Master</option>
                                </select>
                                <div className="invalid-feedback">Please provide the card Type.</div>
                            </MDBRow>
                            <br/>
                            <MDBRow>
                                <label htmlFor="cardnumberid" className="grey-text">Card number</label>
                                <input value={this.cardNumber}
                                       name="cardNumber"
                                       onChange={this.onChangeCardNumber}
                                       type="number" id="cardnumberid" className="form-control"
                                       placeholder="card Number" required/>
                                <div className="invalid-feedback">Please provide the card Number.</div>
                                <label htmlFor="expireid" className="grey-text">Expire Date</label>
                                <input value={this.expire}
                                       onChange={this.onChangeExpire}
                                       type="text"
                                       id="expireid" className="form-control"
                                       name="expire"
                                       placeholder="Expire Date" required/>
                                <div className="invalid-feedback">Please provide an Expire Date.</div>
                            </MDBRow>
                            <MDBRow>
                                <label htmlFor="cvvid" className="grey-text">CVV</label>
                                <input onChange={this.onChangeCVV}
                                       value={this.cvv}
                                       type="number"
                                       id="cvvid" className="form-control"
                                       name="cvv" placeholder="CVV" required/>
                                <div className="invalid-feedback">Please provide the cvv</div>
                                <label htmlFor="holderid" className="grey-text">Holder Name</label>
                                <input onChange={this.onChangeHolder} type="text"
                                       value={this.holder} id="holderid"
                                       className="form-control" name="holder"
                                       placeholder="Card Holder Name" required/>
                                <div className="invalid-feedback">Please provide the Card Holder</div>
                            </MDBRow>
                            <MDBRow>
                                <label htmlFor="amountid" className="grey-text">Amount (LKR)</label>
                                <input onChange={this.onChangeAmount}
                                       value={this.props.location.wsAmount}
                                       type="number"
                                       id="amountid" className="form-control"
                                       name="amount" placeholder="Amount" disabled = "disabled" required/>
                                <div className="invalid-feedback">Please provide the Amount</div>
                            </MDBRow>
                            <br/>

                            <br></br>
                            <MDBBtn gradient="blue" rounded className="btn-block z-depth-1a" type="submit">
                                Confirm Payment
                            </MDBBtn>
                        </form>
                    </MDBCardBody>
                </MDBCard>
            </MDBModalBody>
        );
    }

}