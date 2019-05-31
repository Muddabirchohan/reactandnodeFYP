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
        email: '',
        name: '',
        age: '',
        users: []
    }
    // this.gotoLogin = this.gotoLogin.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getName = this.getName.bind(this);
    this.getPassword = this.getPassword.bind(this);
    this.getAge = this.getAge.bind(this);

}

componentWillMount() {
    axios('http://localhost:10000/api/user')
      .then(res => {
        const users = res.data;
        console.log("users are : ",users)
        let array = Object.values(users);
        this.setState({ users: array });
      })
  }

  Postdata() {

    let userObject = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
      password: this.state.password
    }

    axios.post('http://localhost:10000/api/send', userObject)
      .then(res => {
        console.log(res.data);
      });

      if(this.state.name == "" && this.state.email == "" && this.state.age == "" && this.state.password == "" ){
          alert('fields missing')
      }
      else{
      this.props.history.push('/');
      }
      console.log(userObject);
  }


    getEmail(e){
        this.setState({ email: e.target.value})
    }

getName(e){
    this.setState({ name: e.target.value})
}

getAge(e){
    this.setState({ age: e.target.value})
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
                <h1> Signup Form </h1> <hr/>
                <Form horizontal action="post">


 <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Name
                        </Col> <br/><br/>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="name" onChange={this.getName}/>
                        </Col>
                    </FormGroup>

                     
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

                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            age
                        </Col> <br/><br/>
                        <Col sm={10}>
                            <FormControl type="number" placeholder="age" onChange={this.getAge}/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button  bsStyle="success" type="submit" onClick={this.Postdata.bind(this)}>Sign in</Button>
                        </Col>
                    </FormGroup>
                    <Link to="/"> already have an account? login  </Link>
                </Form>
            </div>
            </Card>
            </div>
        );
    }
}

export default Customer;