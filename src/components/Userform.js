import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios';

class Userform extends React.Component{
    state ={
        username: ''
      };
    
     
      handelSubmit= async(event)=>{
          event.preventDefault();
         const resp= await axios.get(`https://api.github.com/users/${this.state.username}`);
            this.props.onSubmit(resp.data);
      };

      render(){
  
        return (
          <Row style={{marginTop: '5rem'}}>
                <Col sm={12} center="true">
                  <Form onSubmit={this.handelSubmit}>
                    <Form.Group as={Row} >
                    <Form.Label column sm="2" as="h1">
                      GIT USER ID
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control
                       type="text" 
                       placeholder="Enter user ID " 
                       value={this.state.username}
                       onChange={event => this.setState({ username: event.target.value })}
                        required 
                       
                        />
                    </Col>
                  </Form.Group>
                    <Button variant="success" type="submit"  size="lg" block >
                      Submit
                    </Button>
                  </Form>
                </Col>
              </Row>
          
        );
      }
}
export default Userform;