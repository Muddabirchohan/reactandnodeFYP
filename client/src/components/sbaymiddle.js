import React, { Component } from 'react'
import {Col,Row,Grid} from 'react-bootstrap';
import {Card,CardContent,CardActionArea,CardMedia,Button,CardActions} from '@material-ui/core';
import java from './../assets/java.png';
import react from './../assets/react.png';
import c from './../assets/c.png';
import AccountsChart from './AccountsChart';

export default class Sbaymiddle extends Component {
  render() {
    return (
      <div className="recentProducts">
     <div> <h1> <b> OUR MOST PROMINENT TECHNOLOGIES </b> </h1>  </div>
     <Grid>
  <Row className="show-grid">
    <Col xs={12} md={8} lg={4}>
      <div> 
    
       <Card >
      <CardActionArea>
      <img src={java} width="200px"/>
        <CardContent>
        </CardContent>
      </CardActionArea>
      <CardActions>
    
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
      </div>
    </Col>
    <Col xs={6} md={4} lg={4}>
      <div> 
      <Card >
      <CardActionArea>
      <img src={c} width="100px"/>
        <CardContent>
        
        </CardContent>
      </CardActionArea>
      <CardActions>
   
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
      </div>
    </Col>
    <Col xs={6} md={4} lg={4}>
      <div> 
      <Card >
      <CardActionArea>
      <img src={react} width="200px" height="110px"/>
        <CardContent>
        
        </CardContent>
      </CardActionArea>
      <CardActions>
    
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
      </div>
    </Col>
  </Row>

</Grid>

      </div>
    )
  }
}
