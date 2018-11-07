import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Button from 'react-bootstrap/lib/Button';
import { Form, FormControl, Modal,Table } from 'react-bootstrap/lib';
import './assets/react-toolbox/theme.css';
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Card from 'react-toolbox/lib/card';
import { Link } from 'react-router-dom';
import ImageUploader from 'react-images-upload';
import {Grid,Row,Col} from 'react-bootstrap';

// import nav from 'react-bootstrap/lib/Navbar';

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: [],
      myDescription: {},
      change: true,
      myname: '',
      name: 'muddabir',
      myage: '21',
      allusers: false,
      filteredArray: [],
      details: {},
      show: false,
      showForm: false,
      showFavorites: false,
      formname: '',
      formemail: '',
      formage: '',
      formgender: '',
      pictures: '',
      favourites: [],
      change: true
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.gotoLogin = this.gotoLogin.bind(this);
    this.handleChangemyname = this.handleChangemyname.bind(this);
    this.handleChangeMyAge = this.handleChangeMyAge.bind(this);
    this.getFiltered = this.getFiltered.bind(this);
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.handleCloseFavourites = this.handleCloseFavourites.bind(this);
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


  handleChange(e) {
    this.setState({ vote: e.target.value });
  }


  handleChangeName(e) {
    this.setState({ name: e.target.value });
  }


  handleChangemyname(e) {
    this.setState({ myname: e.target.value });
  }

  handleChangeMyAge(e) {
    this.setState({ myage: e.target.value });
  }

  handleChangeSearch(e) {
    this.setState({ search: e.target.value })

  }

  gotoLogin(e) {
    let { users } = this.state;
    var flg = false;
    e.preventDefault();
    const found = users.map((obj) => {
      if (obj.name == this.state.name && obj.age == this.state.myage) {
        this.setState({ change: !this.state.change })
        flg = false
      }
      else if (flg == true) {
        alert('user not found ');
        flg = false;
      }
    })
  }

  getFiltered(e) {

    let { users } = this.state;
    const filter = e.target.value;
    let filteredArray = [];

    users.forEach((user) => {
      if (user.type === filter) {
        filteredArray.push(user);
      }
      else if (filter === 'all') {
        filteredArray.push(user);
      }
    })
    this.setState({ filteredArray })
    console.log('filteredArray', this.state.filteredArray)
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(obj) {
    this.setState({ details: obj, show: true })

  }


  handleCloseForm() {
    this.setState({ showForm: false });
  }

  handleShowForm() {
    this.setState({ showForm: true })

  }

  filterList(event) {

    var updatedList = this.state.users;
    updatedList = updatedList.filter(function (item) {
      return item.name.toString().toLowerCase().search(
        event.target.value.toString().toLowerCase()) !== -1;
    });

    this.setState({ users: updatedList });
    console.log(this.state.users);
  }


  getName(e) {
    this.setState({ formname: e.target.value })
  }

  getAge(e) {
    this.setState({ formage: e.target.value })
  }

  getEmail(e) {
    this.setState({ formemail: e.target.value })
  }

  getGender(e) {
    this.setState({ formgender: e.target.value })
  }

  Postdata() {

    let userObject = {
      name: this.state.formname,
      age: this.state.formage,
      type: this.state.formgender,
      email: this.state.formemail,
      image: this.state.pictures.name
    }

    axios.post('http://localhost:10000/api/send', userObject)
      .then(res => {
        console.log(res.data);
      });
      this.props.history.push('/');
    console.log(userObject);
  }

  onDrop(picture) {
    this.setState({
      pictures: picture
    });
  }


handleFavourites(obj){

this.setState({ favourites: [...this.state.favourites, obj]})

}


handleCloseFavourites(){
  this.setState({ showFavorites : false})
}

hanleOpenFavorites(){
  this.setState({ showFavorites : true})
}

  render() {
    console.log("pictures ",this.state.pictures)
    return (
      <ThemeProvider theme={theme}>
        <div>

<Link to="sbay"> sbay </Link>


          {this.state.change && <AppBar>
            <Button bsStyle="info" style={{float: "right"}} onClick={this.handleShowForm.bind(this)}> form  </Button>
            <Button bsStyle="info" onClick={this.hanleOpenFavorites.bind(this)}> Favourites  </Button>
            <Link to="/customer" style={{paddingLeft: '500px'}} > want to sell your designed softwares?</Link> 
          </AppBar>
          }


          <Modal show={this.state.showForm} onHide={this.handleCloseForm}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <div>
              <div className="wrapper animated bounceInLeft">
              <div className="company-info" style={{width: '600px'}}>
                <ul>
                  <li><i className="fa fa-road"></i> 44 Something st</li>
                  <li><i className="fa fa-phone"></i> (555) 555-5555</li>
                  <li><i className="fa fa-envelope"></i> test@acme.test</li>
                </ul>


                <h3>Email Us</h3>

                <form method="post" >
                  <p>
                    <label >Name</label>
                    <input type="text" name="name" onChange={this.getName.bind(this)} style={{marginLeft: '95px'}} />
                  </p>
                  <p>
                    <label>age</label>
                    <input type="text" name="age" onChange={this.getAge.bind(this)} style={{marginLeft: '110px'}}/>
                  </p>
                  <p>
                    <label>Email Address</label>
                    <input type="email" name="email" onChange={this.getEmail.bind(this)} style={{marginLeft: '42px'}}/>
                  </p>
                  <p>
                    <label> type </label>
                    <input type="text" name="gender" onChange={this.getGender.bind(this)} style={{marginLeft: '88px'}}/>
                  </p>

                  <p >
                    <ImageUploader 
                      style={{ width: '200px', marginLeft: '100px' }}
                      withIcon={true}
                      buttonText='Choose images'
                      onChange={this.onDrop}
                      imgExtension={['.jpg', '.gif', '.png', '.gif']}
                      maxFileSize={5242880}
                    />
                  </p>

                  <p className="full">
                    <button onClick={this.Postdata.bind(this)}> Submit</button>
                  </p>

                </form>

              </div>
              </div>
              </div>

            </Modal.Body>
            <Modal.Footer>
              <Button bsStyle="warning" onClick={this.handleCloseForm}>Close</Button>
            </Modal.Footer>
          </Modal>


          <br />
          {!this.state.change && <div>
              <div class="company-info" > <br/>
                <div className="bgimage" style={{  width: '650px' , height: '200px' }}>
                  
                    <Form onSubmit={this.gotoLogin} style={{ height: '280px', paddingLeft: '10px', paddingRight: '5px' }} >
                      <h1> Login Form </h1>
                      <FormControl
                        type="text"
                        value={this.state.name}
                        placeholder="Enter Name"
                        name="name"
                        onChange={this.handleChangeName}
                      />
                      <br />

                      <FormControl
                        type="password"
                        value={this.state.myage}
                        name="age"
                        placeholder="Enter pass"
                        onChange={this.handleChangeMyAge}
                      />
                      <br /><br /><br />

                      <Button type="submit" bsStyle="success"> submit </Button>
                    </Form>
                  
                </div>
                <br /><br />
              </div>
              </div>
              

              }
    
      <Grid>
  <Row>
 <Col xlg={4}>

{/* <div> 
     <li> WEB APPS</li>
     <li> ANDROID </li>
     <li> ARTIFICIAL INTELLIGENCE</li>
     <li> HUMANOID ROBOTS </li>
     </div> */}

    </Col>

    <Col xlg={8}>
    {this.state.change && <div>
                <h3> Filter By Category </h3>
                <select onChange={this.getFiltered}>
                  <option value="web" > web  </option>
                  <option value="android"> android  </option>
                  <option value="ui"> ui  </option>
                  <option value="ux"> ux  </option>
                  <option value="all"> all  </option>
                </select>
              </div>
              }



    {this.state.change && <div className="div1" >

{this.state.filteredArray.map((obj) => {

  const newTo = {
    pathname: "/description",
    state: this.state.details
  };
  return (
    <Card style={{ width: '200px', height: '250px', marginTop: '35px', marginLeft: '45px' }}>
     
      <p> <b> Posted by : {obj.name} </b> </p>
      <p> <img className="img" src={obj.image} width="100%"/> </p>
      <p> 
        <span class="glyphicon glyphicon-book" style={{ marginRight: '100px'}}  onClick={this.handleShow.bind(this, obj)}>   </span>
          <span class="glyphicon glyphicon-star" onClick={this.handleFavourites.bind(this, obj)}></span>
      {/* <Button bsStyle="info" onClick={this.handleFavourites.bind(this, obj)}> Favourites  
      <span class="glyphicon glyphicon-bookmark"></span>
      </Button> */}
        </p>
    </Card>
  )
})}
<br /><br />
</div>
}
    </Col>
  </Row>
  </Grid>

              <div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>

                    <p style={{ marginLeft: '150px' }}> <img className="img"src={this.state.details.image} /> </p>
                    <p> {this.state.details.name} </p> <hr />
                    <p> {this.state.details._id} </p>  <hr />
                    <p> {this.state.details.price} </p>  <hr />
                    <p> {this.state.details.description} </p>  <hr />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button bsStyle="warning" onClick={this.handleClose}>Close</Button>
                  </Modal.Footer>
                </Modal>
              </div>





                <div>
                <Modal show={this.state.showFavorites} onHide={this.handleCloseFavourites} style={{width: '100%'}}
                bsSize="large">
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>

                  <Table hover > 
                    <thead> 
                      <tr> 
               
                       <th> Name  </th>
                       <th> Age   </th>
                       <th> Email </th>

                      </tr>
                      </thead> 
               {
                 this.state.favourites.map((obj)=>{
                  return(
                     <tr>
                     
                     <td> {obj.name} </td>
                     <td> {obj.age}  </td>
                     <td> {obj.email}</td>

                     </tr>
                   )
                  })
                }
                
                </Table>
                
                  </Modal.Body>
                  <Modal.Footer>
                    <Button bsStyle="warning" onClick={this.handleCloseFavourites}>Close</Button>
                  </Modal.Footer>
                </Modal>
              </div>

               



            </div>
      </ThemeProvider >
    );
        }
      }
      
      export default App;
