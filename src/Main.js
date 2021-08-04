import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import { Container, Row  } from 'react-bootstrap';




class Main extends Component {

  
  render() {
    return (
      <Container>
        <Row xs={2} md={4} lg={2}>
            {
              this.props.data.map(item => {
                return (
                   <HornedBeasts 
                  
                   title={item.title}
                   imageUrl={item.image_url}
                   description={item.description}
                  imglogo={'https://www.freeiconspng.com/thumbs/heart-png/heart-png-15.png'}
                  showDataList ={this.props.showDataList}
                  
                />)
          
              })
            }
        </Row>
      </Container>
    )
  }
}

export default Main;