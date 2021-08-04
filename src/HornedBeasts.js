import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Row, Col, Card, } from 'react-bootstrap'




class HornedBeasts extends Component {



    constructor(props) {
        super(props)
        this.state = {
            counter: 0
            
        };
    }
    counterHandler = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

   display=()=>{

        this.props.showDataList({
            imageUrl : this.props.imageUrl , 
            title : this.props.title , 
            description : this.props.description
         })    
   }
    
    render() {
        return (
            <div>

                <Row xs={1} md={1} className="g-4">
                     
                        <Col>
                            <Card style={{width : '20rem' , paddingTop: 50}}>
                                <Card.Img variant="top" src={this.props.imageUrl} alt={this.props.title} style={{width : '20rem'}} onClick={this.counterHandler}/>
                                <Card.Body>
                                    <Card.Title>{this.props.title}</Card.Title>
                                    <Card.Text>
                                        {this.props.description}
                                    </Card.Text>
                                    <Card.Img src={this.props.imglogo}  style={{width : '30px' , height : '30px'}}/>
                                    <Card.Text>{this.state.counter} </Card.Text>
                                    <button   onClick ={this.display} >click me</button>
                                </Card.Body>
                            </Card>
                        </Col>
                    
                </Row>
            </div>
        )
    }
}

export default HornedBeasts;