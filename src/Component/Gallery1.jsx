import { useEffect, useState } from 'react'
import { Component } from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { Alert } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
import React from 'react';
import { Link } from 'react-router-dom';






const Gallery1 =()=>{
const[galleria,setGalleria] = React.useState([]);
const[loading,setLoading] = React.useState(true);
const[error,setError] = React.useState(false);

   const GetOneGallery = async()=>{
        try{
            let response = await fetch("http://www.omdbapi.com/?apikey=a1e15bf2&s=the%20walking%20dead")
        if(response.ok){
    
            let data = await response.json()
            console.log(data)
            setGalleria(data.Search)
                setLoading(false)
                setError(false)
            
        }else{
           setError(true)
        }
        
        }catch(err){
            console.log(err)
            alert.info("problema nel caricamento")
          setLoading(false)
          setError(true)
        }
        
    };

useEffect(()=>{
    GetOneGallery()
    console.log("funziona")
},[])




    return(
       <>
         {error && (
              <Alert variant="danger">Qualcosa è andato storto</Alert>
            )}

       {loading && (
              <div className="text-center fs-1">
                <Spinner animation="border" role="status" variant="light">
                  <span className="">loading...</span>
                </Spinner>
              </div>
            )}

      

        <h3 className="my-3">Harry Potter Saga</h3>
        <Row className="text-center" >
       {galleria.slice(0,5).map((film)=>(

   
        
          <Col xs={12} md={3} lg={4} xl={2} xxl={2} className="mx-3"  key={film.imdbID}>
            <Link to={"/MovieDetails/"+film.imdbID}>
              <img src={film.Poster} width={245} className="-film" id="film1" alt=""  />
            </Link>
       </Col>
        
         
         
       ))}
         </Row>
       </>
    )

}



export default Gallery1;