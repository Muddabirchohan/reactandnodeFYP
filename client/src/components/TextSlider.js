import React, { Component } from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
export default class TextSlider extends Component {
  render() {
    return (
      <div className="slider">
          <h1 className="textslider"> <b> REVIEWS </b> </h1>
          <Slider>
          <p style={{ textAlign: 'center'}}> We try, test, and even taste to ensure products and services meet our high standards. </p>
          <p style={{ textAlign: 'center'}}> rehan has always been a helping hand to me and always tried to solve the vulnerabilities in limited time </p>
          <p style={{ textAlign: 'center'}}> zain has always been a helping hand to me and always tried to solve the vulnerabilities in limited time </p>
          </Slider>

      </div>
    )
  }
}
