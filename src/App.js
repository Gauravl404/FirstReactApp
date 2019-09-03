import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CardList from './components/ProfileCard.js';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Userform from './components/Userform'


class App extends React.Component {
  
      state ={
        profiles: [],
      };

      addnewprofile= (profiledata) =>{
        
          this.setState(prevState =>({
            profiles: [...prevState.profiles, profiledata],
          }));
       
      };
  
  render(){
  
  return (
    <div>
     <Container>
        <Userform onSubmit={this.addnewprofile}/>
        <Row style={{marginTop: '5rem'}}>
          <Col sm>
          <CardList profiles= {this.state.profiles} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}


}
export default App;
