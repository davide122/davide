import React from "react";
import { Component } from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";








class Gallery3 extends React.Component{
state={
    galleria:[]
    
}
    GetOneGallery = async()=>{
        try{
            let response = await fetch("http://www.omdbapi.com/?apikey=a1e15bf2&s=one%20piece")
            
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
        <h3 className="my-3">One piece saga</h3>
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

export default Gallery3;