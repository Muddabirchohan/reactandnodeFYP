import React, { Component } from 'react';
import {Carousel,Button} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import '../App.css';
import Sbaymiddle from './sbaymiddle';
import ContactUs from './ContactUs';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import top from './../assets/top.png'; 
import Aboutus from './Aboutus';
import { Slide } from '@material-ui/core';
import TextSlider from './TextSlider';
import java from './../assets/java.png';
import react from './../assets/react.png';
import c from './../assets/c.png';
import MenuItems from './MenuItems';
import { Link } from 'react-router-dom';
import AccountsChart from './AccountsChart';

let lastScrollY = 0;
export default class sbaytop extends Component {

constructor(){
  super();
  this.state = {
    width: 0,
    height: 0,
    offset: 0
  }
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}

componentDidMount() {
 
  this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);
  window.addEventListener('scroll', this.handleScroll);

  var rect = ReactDOM.findDOMNode(this)
      .getBoundingClientRect();
  this.setState({
      offset: rect
  })
}

componentWillUnmount() {
  window.removeEventListener('scroll', this.handleScroll);
  window.removeEventListener('resize', this.updateWindowDimensions);
}

updateWindowDimensions() {
  this.setState({
      width: window.innerWidth,
      height: window.innerHeight
  });
}

handleScroll = () => {
  lastScrollY = window.scrollY;
  console.log("scroll",lastScrollY)
  if(lastScrollY > (this.state.height/2)){
      let x= document.getElementById("btn");
      x.style.display= 'inline';
  }
  else{
      let x= document.getElementById("btn");
      x.style.display= 'none';
  }
}


  render() {
    return (
      <div>

          <div style={{position: 'fixed'}}>
            <p> {this.state.width} </p>
            <p> {this.state.height} </p>
            </div>

  <div className="sbaytop" id="top">
  <MenuItems/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <h1 class="w3-container w3-center w3-animate-left"> " COME GET YOUR SOFTWARE SELL <br/> <i> we deliver yoy the best services" </i> </h1> 
      <br/><br/>
    {/* <AnchorLink href="#contact"> <Button bsStyle="primary"> CONTACT US</Button> </AnchorLink> */}
    <Link to="/">  <Button bsStyle="primary"> OUR PRODUCTS </Button> </Link>
        <br/><br/><br/><br/><br/>  <br/><br/><br/><br/><br/><br/>
      </div> 



<Aboutus/>
<br/><br/><br/>
<TextSlider/>
<Sbaymiddle/> <br/>
<ContactUs id="contact"/>
<div className="css3-notification">
                <AnchorLink href='#top'>
                    <img className="topbutton" id="btn" src={top} width="40px"/>
                </AnchorLink>
            </div>

            <iframe
    allow="microphone;"
    width="350"
    height="430"
    src="https://console.dialogflow.com/api-client/demo/embedded/42dc1387-4cc5-488d-9ff7-9bf5f5bf00a3">
</iframe>
      </div>
    )
  }
}

