import React from "react";
import { Component } from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { Alert } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';







class Gallery4 extends React.Component{
state={
    galleria:[],
    load:true,
    error:false,
    
}
    GetOneGallery = async()=>{
        try{
            let response = await fetch("http://www.omdbapi.com/?apikey=a1e15bf2&s=hunger%20games")
        if(response.ok){
    
            let data = await response.json()
            console.log(data)
            this.setState({
                galleria:(data.Search),
                load:false,
                error:false,
            }

            )
            
        }else{
           this.setState({
            error:true
           })
        }
        
        }catch(err){
            console.log(err)
            alert.info("problema nel caricamento")
            this.setState({
                load:false,
                error:true,
            })
        }
        
    };

componentDidMount(){
    this.GetOneGallery()
    console.log("funziona")
}





render(){
    return(
       <>
         {this.state.error && (
              <Alert variant="danger">Qualcosa è andato storto</Alert>
            )}

       {this.state.load && (
              <div className="text-center fs-1">
                <Spinner animation="border" role="status" variant="light">
                  <span className="">loading...</span>
                </Spinner>
              </div>
            )}

      

        <h3 className="my-3">Hunger game saga</h3>
        <Row className="text-center">
       {this.state.galleria.slice(0,5).map((film)=>(

   
        
          <Col xs={12} md={6} lg={4} xl={2} xxl={2} className="mx-3" key={film.imdbID}>
              <img src={film.Poster} width={245} className="-film" id="film1" alt="" />
            
       </Col>
        
         
         
       ))}
         </Row>
       </>
    )

}

}

export default Gallery4;