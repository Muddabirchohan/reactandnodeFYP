import React, {Component} from 'react';
import {Form,FormControl,FormGroup,ControlLabel,Col,Button} from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Customer extends Component {
constructor(){
    super();

    this.state = {
        users: [],
        password: '',
        email: ''
    }
    this.gotoLogin = this.gotoLogin.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getPassword = this.getPassword.bind(this);

}

componentWillMount() {
    axios('http://localhost:10000/api/customer')
      .then(res => {
          console.log("hello",res);
        const users = res.data;
        console.log("users are : ",users)
        let array = Object.values(users);
        this.setState({ users: array });
      })
      
  }


  gotoLogin(e) {
    let { users } = this.state;
    var flg = false;
    e.preventDefault();
    const found = users.map((obj) => {
      if (obj.email == this.state.email && obj.password == this.state.password) {
        this.setState({ change: !this.state.change })
        flg = false
      }
      else if (flg == true) {
        alert('user not found ');
        flg = false;
      }
    })
  }

    getEmail(e){
        this.setState({ email: e.target.value})
    }

    getPassword(e){
    this.setState({ password: e.target.value})
    }
    render() {
        console.log(this.state.users)
        return (
            <div className="login-bg">
            <Card className="login" style={{backgroundColor: '#00000085'}}>
            <div >
                <h1> Login Form </h1> <hr/>
                <Form horizontal onSubmit={this.gotoLogin}>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col> <br/><br/>
                        <Col sm={10}>
                            <FormControl type="email" placeholder="Email" onChange={this.getEmail}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col> <br/><br/>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Password" onChange={this.getPassword} />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button  bsStyle="success" type="submit">Sign in</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>

            <Link to="sighnup"> sighnup for free </Link>
            </Card>
            </div>
        );
    }
}

export default Customer;