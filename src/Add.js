import React, { Component } from 'react';
import { Form,Button } from 'react-bootstrap';
import Nav from './Nav';
import './Add.css';
class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          phone: ""
        };
    
        this.handleNInputChange = this.handleNInputChange.bind(this);
        this.handlePInputChange = this.handlePInputChange.bind(this);
        this.saveHandler = this.saveHandler.bind(this);
        this.backHandler = this.backHandler.bind(this);
        
      }
      handleNInputChange(event) {
        this.setState({
          name: event.target.value
        });
      }
      handlePInputChange(event) {
        this.setState({
          phone: event.target.value
        });
      }
      backHandler(){
        this.props.history.push('/')
      }
      saveHandler(){
        const item = {
          name: this.state.name,
          phone: this.state.phone
        }
        this.props.addItem(item);
        this.props.history.push('/')
      }
    render(){
        return (
          <React.Fragment>
            <Nav />
            <br />
            
            <Button variant="primary" onClick={this.backHandler}>
                Back
              </Button>
              <br />
              <br />
             <div className="form">
             <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" onChange={this.handleNInputChange} />
                
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Phone number" onChange={this.handlePInputChange} />
              </Form.Group>
              
            
              <Button variant="success" onClick={this.saveHandler}>
                Submit
              </Button>
 
              </Form> 
              
              <br />
              <h5>Subscriber to be added</h5>
              Name: 
              {this.state.name}
              <br />
              Phone: 
              {this.state.phone}
          </div>
          </React.Fragment>
            );

    }
}


export default Add;