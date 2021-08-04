import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeasts from './SelectedBeast';
import dataofAnimal  from './data.json';




class App extends Component {


    constructor(props){
        super(props)
        this.state ={
          hornedList :dataofAnimal,
          show : false ,
          animal : {}
        }
    }


    handlerShow=(data)=>{
       this.setState ={
        show : true ,
        animal :data

       }
    }

    handlerClose =()=>{
        this.setState({
            show : false 
    
           })
    }


    render() {
        return (

            <div>
                <Header/>
                <Main showDataList = {this.handlerShow} data ={this.state.hornedList} />
                <SelectedBeasts animal = {this.state.animal} showModal ={this.state.show} closeData= {this.handlerClose}/>
                <Footer/>
               
            </div>
        )
    }
}

export default App;