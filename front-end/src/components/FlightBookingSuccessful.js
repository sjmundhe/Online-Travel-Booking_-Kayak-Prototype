import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './../logo.png';
import StayUptoDate from './StayUptoDate';
import BeautifulDown from './BeautifulDown';
import HotelTile from './HotelTile';
import Header from './Header';
var FontAwesome = require('react-fontawesome');


class FlightBookingSuccessful extends Component {

  componentWillMount(){
console.log(this.props.flightTile);

  }
  state={

  }
  render() {
    return (
      <div style={{backgroundColor: "#E8E8E8", textAlign: "center", minHeight: 800}}>
      <Header handleClickSignup={this.props.handleClickSignup} handleClickSignin={this.props.handleClickSignin}/>
      <div style={{width: "40%", height: "auto",marginTop: 100,marginLeft: "30%"}}>
        <i className="huge icons">
        <i aria-hidden="true" style={{color: "green"}}className="sun big loading icon"></i>
        <i aria-hidden="true" style={{color:"green"}}className="checkmark icon"></i></i>

        <h1>Booking Successful.</h1>
        <hr />
    </div>


    <table className="table table-hover" style={{width: "60%", marginLeft: "20%"}}>
<thead>
  <tr>
    <th style={{width: "50%"}}>Your Booking Details</th>
    <th></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Email Id:</td>
    <td>{this.props.username}</td>

  </tr>
  <tr>
    <td>Booking type</td>
    <td>hotel Booking</td>
  </tr>
  <tr>
    <td>Booking Id:</td>
    <td>123</td>
  </tr>
  <tr>
    <td>Flight Class</td>
    <td>{this.props.flightTile.flightClass}</td>
  </tr>
  <tr>
    <td>Flight Agency</td>
    <td>{this.props.flightTile.flightAgency}</td>
  </tr>
  <tr>
    <td>Total fare</td>
    <td>${(this.props.flightTile.flightFareDetails * this.props.seat) + (this.props.flightTile.flightFareDetails * this.props.seat)/10}</td>
  </tr>
</tbody>
</table>

      </div>
);
  }
}

export default FlightBookingSuccessful;
