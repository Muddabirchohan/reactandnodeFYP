import React, { Component } from 'react';
import '../App.css';
import {Grid,Col,Row} from 'react-bootstrap';
import Muddabir from './../assets/img.jpg';
import Rehan from './../assets/rehan.jpg';
import Zain from './../assets/zain.jpg';
import {Card,CardContent,CardActionArea,CardMedia,Button,CardActions} from '@material-ui/core';
import {Glyphicon} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Aboutus extends Component {
    render() {
        return (

                <div className="about-us" id="about">
                    <h2> <b>  ABOUT ZRM </b> </h2>

                        <h5>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                        </h5>

                    <Row>

                        <Col lg={4} sm={12} className="about-us-bg">
                        {/* <img src={} width="60px"/> */}
                           
                        <Card >
      <CardActionArea style={{backgroundColor: 'black',paddingTop: '20px'}}>
       <img src={Muddabir}  style={{ width: '150px', height: '140px', borderRadius: '50%'}}/>
        <CardContent>

        </CardContent>
      </CardActionArea>
      <CardActions>
      <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
      </CardActions>
      <Button bsSize="xlarge">
      <Glyphicon glyph="star" /> 
      <a href="https://github.com/Muddabirchohan"> Github Profile </a>
      </Button>
    </Card>        
                        </Col>
                        <Col lg={4} sm={12} className="about-us-bg">                         
                        <Card >
      <CardActionArea style={{backgroundColor: 'black',paddingTop: '20px'}}>
       <img src={Rehan}  style={{ width: '150px', height: '140px', borderRadius: '50%'}}/>
        <CardContent>
        <Button bsSize="xlarge">
        <Glyphicon glyph="star" /> Github Profile
      </Button>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
      </CardActions>
      <Button bsSize="xlarge">
        <Glyphicon glyph="star" /> Github Profile
      </Button>
    </Card>
                          
                                    </Col>

      <Col lg={4} sm={12} className="about-us-bg">
                         
                        <Card >
      <CardActionArea style={{backgroundColor: 'black',paddingTop: '20px'}}>
       <img src={Zain}  style={{ width: '150px', height: '140px', borderRadius: '50%'}}/>
        <CardContent>
        
        </CardContent>
      </CardActionArea>
      <CardActions>
      <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
      </CardActions>
      <Button bsSize="xlarge">
        <Glyphicon glyph="star" /> Github Profile
      </Button>
    </Card>                          
      </Col>
                    </Row>
                </div>
        );
    }
}

export default Aboutus;
