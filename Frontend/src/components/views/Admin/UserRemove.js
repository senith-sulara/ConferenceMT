import React, {Component} from "react";
import {MDBAlert, MDBBtn, MDBCard, MDBCardBody, MDBModalBody, MDBRow} from "mdbreact";
import {getUser, removeUser, saveUser} from "../../services/signup.service";
import Swal from "sweetalert2";

export default class UserRemove extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            modal: false,
            model2: false,
            editfname: '',
            editemail: '',
            email: '',
            editpassword: '',
            editconfirmpass: '',
            editfirstName: '',
            editUserId:'',
            UserListStatus: false,
        };

        this.onClick = this.onClick.bind(this);
        this.SearchUser = this.SearchUser.bind(this);
        this.RemoveUser = this.RemoveUser.bind(this);
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
            editfname: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangeEmail(event) {
        this.setState({
            editemail: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangePassword(event) {
        this.setState({
            editpassword: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangeConfirmPassword(event) {
        this.setState({
            editconfirmpass: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangeUserType(event) {
        this.setState({
            edituserType: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    SearchUser(event) {
        event.preventDefault();
        event.target.className += " was-validated";
        if (this.state.email != '') {
            const userDetail = {
                email: this.state.email,
            }
            console.log(userDetail);

            getUser(this.state.email).then(res => {
                if (res.data.message === 'not found') {
                    Swal.fire(
                        '',
                        'User Notfound !',
                        'error'
                    )
                } else {
                    console.log('llllllllllllll'+res.data.message.userType);
                    this.setState({
                        editfirstName: res.data.message.userName,
                        editemail: res.data.message.email,
                        editpassword: res.data.message.password,
                        editconfirmpass: res.data.message.password,
                        edituserType: res.data.message.userType,
                        editUserId: res.data.message._id,
                        UserListStatus: true
                    })
                }
            }).catch(error => console.error(error));
        } else {
        }
    };

    SaveEditUser(){

    }

    RemoveUser(){
        removeUser(this.state.editUserId).then(res=>{
            console.log(res.data.message)
            if (res.data.message === 'Deleted!') {
                Swal.fire(
                    '',
                    'Delete Success',
                    'success'
                )
            } else {
                Swal.fire(
                    '',
                    'Delete Error !',
                    'error'
                )
            }

        });
    }

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
                                <strong className="loginh3 ">EDIT or REMOVE</strong>
                            </h2>
                        </div>
                        <form className="needs-validation" onSubmit={this.SearchUser} noValidate>
                            <MDBRow>
                                <label htmlFor="emailid" className="grey-text">Email</label>
                                <input value={this.email}
                                       onChange={this.onChangeEmail}
                                       type="email"
                                       id="emailid" className="form-control"
                                       name="email"
                                       placeholder="Your Email address" required/>
                                <div className="invalid-feedback">Please provide an email.</div>
                            </MDBRow><br/>

                            <MDBBtn gradient="blue" rounded className="btn-block z-depth-1a" type="submit">
                                Search User
                            </MDBBtn>
                            <br></br>
                        </form>

                        <form className="needs-validation" onSubmit={this.RemoveUser} noValidate>
                            <MDBBtn color="danger" rounded className="btn-block z-depth-1a" type="submit">
                                Remove User
                            </MDBBtn>
                            <br></br>
                        </form>
                        {
                            this.state.UserListStatus ?
                                    <form className="needs-validation" onSubmit={this.SaveEditUser} noValidate>
                                        <MDBRow>
                                            <label htmlFor="firstnameid" className="grey-text">First name</label>
                                            <input value={this.state.editfirstName}
                                                   name="fname"
                                                   onChange={this.onChangeFname}
                                                   type="text" id="firstnameid" className="form-control"
                                                   placeholder="First name" required/>
                                            <div className="invalid-feedback">Please provide the first name.</div>
                                            <label htmlFor="emailid" className="grey-text">Email</label>
                                            <input value={this.state.editemail}
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
                                                   value={this.state.editpassword}
                                                   type="password"
                                                   id="passwordid" className="form-control"
                                                   name="password" placeholder="Password" required/>
                                            <div className="invalid-feedback">Please provide the password</div>
                                            <label htmlFor="conpasswordid" className="grey-text">Confirm
                                                Password</label>
                                            <input onChange={this.onChangeConfirmPassword} type="password"
                                                   value={this.state.editconfirmpass} id="conpasswordid"
                                                   className="form-control" name="confirmpass"
                                                   placeholder="Confirm Password" required/>
                                            <div className="invalid-feedback">Please provide the confirm password</div>
                                            {
                                                this.state.editpassword != this.state.editconfirmpass ?
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
                                                    value={this.state.edituserType}>
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
                                : ''
                        }
                    </MDBCardBody>
                </MDBCard>
            </MDBModalBody>
        );
    }

}