import React, {Component} from "react";
import {MDBAlert, MDBBtn, MDBCard, MDBCardBody, MDBModalBody, MDBRow} from "mdbreact";
import {getUser, saveUser} from "../../services/signup.service";
import Swal from "sweetalert2";

export default class UserAdd extends Component{

    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            modal: false,
            model2: false,
            fname: '',
            email: '',
            password: '',
            confirmpass: '',
            loginEmail: '',
            loginPass: '',
            firstName: '',
            loginEmailV: false,
            loginPassV: false,

        };

        this.onClick = this.onClick.bind(this);
        this.submitUser = this.submitUser.bind(this);
        this.onChangeFname = this.onChangeFname.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
        this.onChangeEmailV = this.onChangeEmailV.bind(this);
        this.onChangePassV = this.onChangePassV.bind(this);
        this.onChangeUserType = this.onChangeUserType.bind(this);
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

    toggle2 = () => {
        this.setState({
            modal: !this.state.modal,
            modal2: !this.state.model2
        });
    }

    onChangeEmailV(event) {
        this.setState({
            loginEmail: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangePassV(event) {
        this.setState({
            loginPass: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangeFname(event) {
        console.log(event.target.value)
        this.setState({
            fname: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangeEmail(event) {
        this.setState({
            email: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangePassword(event) {
        this.setState({
            password: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangeConfirmPassword(event) {
        this.setState({
            confirmpass: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangeUserType(event) {
        this.setState({
            userType: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    submitUser(event) {
        event.preventDefault();
        event.target.className += " was-validated";
        if (this.state.password == this.state.confirmpass) {
            if (this.state.fname != '') {
                if (this.state.email != '') {
                    if (this.state.password != '') {
                        if (this.state.confirmpass != '') {
                            const userDetail = {
                                userName: this.state.fname,
                                email: this.state.email,
                                password: this.state.password,
                                userType: this.state.userType
                            }
                            console.log(userDetail);

                            getUser(this.state.email).then(res => {
                                if(res.data.message === 'not found'){
                                    saveUser(userDetail).then(res=>{
                                        if (res.data.success === 'successful') {
                                            this.setState({
                                                fname: '',
                                                password: '',
                                                confirmpass: '',
                                                email: '',
                                                modal2 :false
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
                                }else {
                                    Swal.fire(
                                        '',
                                        'You Cant Use This Email Please Enter Another One',
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
            Swal.fire('',
                'password and confirm password are not the same !',
                'error');
        }
    };

    render() {
        const {
            submitUser, firstName, onChangeFname, email,
            onChaneEmail, onChangePassword, password, onChangeConfirmPassword, confirmpass} = this.props;
        return (
            <MDBModalBody>
                <MDBCard>
                    <MDBCardBody className="mx-2">
                        <div className="text-center">
                            <h2 className="loginh3 mb-1">
                                <strong className="loginh3 ">REGISTER</strong>
                            </h2>
                        </div>
                        <form className="needs-validation" onSubmit={this.submitUser} noValidate>
                            <MDBRow>
                                <label htmlFor="firstnameid" className="grey-text">First name</label>
                                <input value={this.firstName}
                                       name="fname"
                                       onChange={this.onChangeFname}
                                       type="text" id="firstnameid" className="form-control"
                                       placeholder="First name" required/>
                                <div className="invalid-feedback">Please provide the first name.</div>
                                <label htmlFor="emailid" className="grey-text">Email</label>
                                <input value={this.email}
                                       onChange={this.onChangeEmail}
                                       type="email"
                                       id="emailid" className="form-control"
                                       name="email"
                                       placeholder="Your Email address" required/>
                                <div className="invalid-feedback">Please provide an email.</div>
                            </MDBRow>
                            <MDBRow>
                                <label htmlFor="passwordid" className="grey-text">Password</label>
                                <input onChange={this.onChangePassword}
                                       value={this.password}
                                       type="password"
                                       id="passwordid" className="form-control"
                                       name="password" placeholder="Password" required/>
                                <div className="invalid-feedback">Please provide the password</div>
                                <label htmlFor="conpasswordid" className="grey-text">Confirm
                                    Password</label>
                                <input onChange={this.onChangeConfirmPassword} type="password"
                                       value={this.confirmpass} id="conpasswordid"
                                       className="form-control" name="confirmpass"
                                       placeholder="Confirm Password" required/>
                                <div className="invalid-feedback">Please provide the confirm password</div>
                                {
                                    this.password != this.confirmpass ?
                                        <MDBAlert color="danger">
                                            password and confirm password does not match
                                        </MDBAlert> : ''
                                }
                            </MDBRow>
                            <br/>
                            <MDBRow>
                                <label htmlFor="usertypeid" className="grey-text">User Type</label>
                                <select id="usertypeid" name="userType"
                                        onChange={this.onChangeUserType}
                                        value={this.userType}>
                                    <option value="">Select Type</option>
                                    <option value="RESEARCHER">RESEARCHER</option>
                                    <option value="WKC">WKC</option>
                                    <option value="ATTENDEE">ATTENDEE</option>
                                    <option value="ADMIN">ADMIN</option>
                                </select>
                                <div className="invalid-feedback">Please provide the first name.</div>
                            </MDBRow>
                            <br/>

                            <br></br>
                            <MDBBtn gradient="blue" rounded className="btn-block z-depth-1a" type="submit">
                                REGISTER
                            </MDBBtn>
                        </form>
                    </MDBCardBody>
                </MDBCard>
            </MDBModalBody>
        );
    }

}