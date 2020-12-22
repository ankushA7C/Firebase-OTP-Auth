import React, { Component } from 'react';
import './App.css';
import firebase from './firebase'

export default class App extends Component {
  onSubmit = () => {
    let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
    let number = "";//number should +912343212342
    firebase.auth().signInWithPhoneNumber(number, recaptcha).then(function (e) {
      let code = prompt('Enter the OTP', '');
      if (code == null) return;
      e.confirm(code).then(function (result) {
        console.log("Result:", result.user);
      })
    })
  }
  render() {
    return (
      <>
        <div id="recaptcha"></div>
        <button onClick={this.onSubmit}>click me</button>
      </>
    );
  }
}


