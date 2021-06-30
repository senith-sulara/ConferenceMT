import React, {Component, useState} from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBModalBody,
    MDBRow
} from "mdbreact";
import {saveWorkshop} from "../../services/workshop.service";
import Swal from "sweetalert2";
import {submitRP} from "../../services/researcher.service";
import Dropzone from 'react-dropzone';

export class Researcher extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            modal: false,
            pdf: null,
            fileData: null,
            fileName: null,
            author: '',
            email: '',
            contact: '',
        };

        this.onClick = this.onClick.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.onDrop = this.onDrop.bind(this);
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

    // onFileChange(e) {
    //     this.setState({pdf: e.target.files[0]})
    // }

    onFileChange(event) {
        let selectedFile = event.target.files;
        let file = "null";
        let fileName = "";
        //Check File is not Empty
        if (selectedFile.length > 0) {
            // Select the very first file from list
            let fileToLoad = selectedFile[0];
            fileName = fileToLoad.name;
            // FileReader function for read the file.
            let fileReader = new FileReader();
            // Onload of file read the file content
            fileReader.onload = function (fileLoadedEvent) {
                file = fileLoadedEvent.target.result;
            };
            console.log(file);
            // Convert data to base64
            fileReader.readAsDataURL(fileToLoad);
        }

        this.setState({
            fileData: file,
            fileName: fileName
        })
    }

    onChangeAuthor(event) {
        console.log(event.target.value)
        this.setState({
            author: event.target.value,
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

    submitRP(event) {
        event.preventDefault();
        event.target.className += " was-validated";
        if (this.state.pdf != '') {
            if (this.state.author != '') {
                if (this.state.email != '') {
                    if (this.state.contact != '') {
                        // const formData = new FormData()
                        // formData.append('pdf', this.state.pdf)
                        const RPDetail = {
                            author: this.state.author,
                            email: this.state.email,
                            contact: this.state.contact,
                            fileData: this.state.fileData,
                            fileName: this.state.fileName,
                            user: localStorage.getItem("CustomerId"),
                            status:'pending'
                        }
                        console.log(RPDetail);


                        submitRP(RPDetail).then(res => {
                            if (res.data.success === 'successful') {
                                this.setState({
                                    author: '',
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
    };

    onDrop = (acceptedFiles) => {
        // Save acceptedFiles in this scripts directory
    }
    getRootProps() {

    }


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
                        <form className="needs-validation" onSubmit={this.submitRP.bind(this)} noValidate>
                            <MDBRow>
                                {/*<Dropzone onDrop={this.onDrop}>*/}
                                {/*    {({getRootProps, getInputProps}) => (*/}
                                {/*        <div {...getRootProps()}>*/}
                                {/*            <input {...getInputProps()} />*/}
                                {/*            Click me to upload a file!*/}
                                {/*        </div>*/}
                                {/*    )}*/}
                                {/*</Dropzone>*/}

                                <label htmlFor="pdfid" className="grey-text">Research Paper</label>
                                <div className="form-group">
                                    <input type="file" name='fileData' onChange={this.onFileChange}/>
                                </div>
                                {/*<input type="file" name="file" onChange={changeHandler} />*/}
                            </MDBRow>
                            <MDBRow>
                                <label htmlFor="authorid" className="grey-text">Author Name</label>
                                <input value={this.author}
                                       name="author"
                                       onChange={this.onChangeAuthor}
                                       type="text" id="authorid" className="form-control"
                                       placeholder="Author Name" required/>
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
                                Research Paper Submit
                            </MDBBtn>
                        </form>
                    </MDBCardBody>
                </MDBCard>
            </MDBModalBody>
        );
    }

}