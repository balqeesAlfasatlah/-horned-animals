import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data.json';
import { Container, Row ,Col } from 'react-bootstrap';



class Main extends Component {

  
  render() {
    return (


      <Container>
{
  console.log(data)
}
        <Row xs={2} md={4} lg={2}>
          
            {
              data.map(elem => {
                return ( <HornedBeasts title={elem.title}
                  imageSrc={elem.image_url}
                  description={elem.description}
                  imglogo={'https://www.freeiconspng.com/thumbs/heart-png/heart-png-15.png'}
                  counter={0}
                />)

                
          
              })
            }

          
        </Row>
      </Container>
    )
  }
}

export default Main;