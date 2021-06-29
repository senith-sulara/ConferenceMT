import React, { Component} from 'react';
import './home.css';
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages:[],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8085/edit/')
    .then(response => {
      this.setState({ pages: response.data});
      console.log(response.data);
    })
    .catch(error => {
      alert(error.message)
    })
  }


  render() {
    return (
      <div className="container">
        <h1 className="head">Welcome to SLIITCon 2021</h1>
        <h2 className="ver">Virtual Conference</h2>


        {/* <h4>Date: {this.state.date}</h4>
        <h5>Time: {this.state.time}</h5> */}

        {this.state.pages.length > 0 && this.state.pages.map((item, index) => (
           <div key={index} className="card mb-3">
           {/* <div className="p-3" onClick={e => this.navigateSubjectPage(e, item._id)}>  */}
              <h4>date: {item.date}</h4>
              <h5>time: {item.time}</h5>
          {/* </div> */}
          </div>
        ))}
      </div>
    )
  }

}
export default Home;