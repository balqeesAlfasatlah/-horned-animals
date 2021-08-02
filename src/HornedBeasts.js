import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card } from 'react-bootstrap'



class HornedBeasts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: props.counter
        };
    }
    counterHandler = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }


    render() {
        return (
            <div className='info'>
                
                <Card style={{ paddingBottom: 30 }}>
                    <Container>

                        <h2>{this.props.title}</h2>
                        <img src={this.props.imageSrc} alt={this.props.title} style={{ width: '200' }} />
                        <p>{this.props.description}</p>
                        <img className='logo' src={this.props.imglogo} onClick={this.counterHandler} />
                        <span>{this.state.counter}</span>

                    </Container>
                </Card>
            </div>
        )
    }
}

export default HornedBeasts;