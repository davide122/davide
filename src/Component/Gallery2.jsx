import React from "react";
import { Component } from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";







class Gallery2 extends React.Component{
state={
    galleria:[]
    
}
    GetOneGallery = async()=>{
        try{
            let response = await fetch("http://www.omdbapi.com/?apikey=a1e15bf2&s=star%20wars")
        if(response.ok){
            let data = await response.json()
            console.log(data)
            this.setState({
                galleria:(data.Search)
            }

            )
           
        }else{
           
        }
        
        }catch(err){
            console.log(err)
            alert("problema nel caricamento")
        }
        
    };

componentDidMount(){
    this.GetOneGallery()
    console.log("funziona")
}





render(){
    return(
       <>
       {this.state.load && (
              <div className="text-center fs-1">
                <Spinner animation="border" role="status" variant="light">
                  <span className="">caricamento...</span>
                </Spinner>
              </div>
            )}
        <h3 className="my-3">Star wars saga</h3>
        <Row className="text-center">
       {this.state.galleria.slice(0,5).map((film)=>(

   
        
          <Col xs={12} md={6} lg={4} xl={2} xxl={2} className="mx-3"  key={film.imdbID}>
              <img src={film.Poster} width={245} className="-film" id="film1" alt="" />
            
       </Col>
        
         
         
       ))}
         </Row>
       </>
    )

}

}

export default Gallery2;