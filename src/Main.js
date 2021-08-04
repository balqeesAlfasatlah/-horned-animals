import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import { Container, Row, Form, FloatingLabel } from 'react-bootstrap';
import dataofAnimal from './data.json';



class Main extends Component {

  constructor() {
    super()
    this.state = {
      horns: 0
    }
  }


  beastHandler = (e) => {
    this.setState({
      horns: e.target.value
    })

  }
  render() {
    return (
      <Container>
        <Row xs={2} md={4} lg={2}>
          
            <FloatingLabel controlId="floatingSelect" onChange={(e) => this.beastHandler(e)}>
              <Form.Select aria-label="Floating label select example" onChange={(e) => this.beastHandler(e)}>
                <option>Open this select menu</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="100">100</option>
              </Form.Select>
            </FloatingLabel>{
            dataofAnimal.map((element, i) => {
              return( 
                (Number(this.state.horns) === element.horns &&
                <HornedBeasts title={element.title}  imageUrl ={element.image_url} description={element.description} key={i} />)||
                (Number(this.state.horns) === 0 &&
                <HornedBeasts title={element.title}  imageUrl ={element.image_url} description={element.description} key={i} />)

           ) })}
          

        </Row>
      </Container>


    )
  }
}

export default Main;

