import React , { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data.json';



class Main extends Component{
    render(){
        return(
            <div className ='horned'>
               {
                 data.map(elem =>{
                   return <HornedBeasts title = {elem.title}  
                   imageSrc = {elem.image_url}
                   description ={elem.description}
                   imglogo =  {'https://www.freeiconspng.com/thumbs/heart-png/heart-png-15.png'} 
                   counter = {0}
                    />
                 }) 
               }






            </div>
        )
    }
}

export default Main;