import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react'
import React from 'react';
import { useParams } from 'react-router-dom';
const MovieDetails =()=>{
    const params = useParams()
    const[galleria1,setgalleria1] = React.useState([]);
    const[loading,setLoading] = React.useState(true);
    const[error,setError] = React.useState(false);
    
       const filmdetails = async()=>{
            try{
                let response1 = await fetch("http://www.omdbapi.com/?apikey=f1fd4a37&i="+params.id)
            if(response1.ok){
        
                let data1 = await response1.json()
                console.log("ok",data1)
                setgalleria1(data1)
                console.log("guarda qui",galleria1)
                    setLoading(false)
                    setError(false)
                    console.log("ok",data1)

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
       let filmtrovato = galleria1.find((film1)=>params.id === film1.imdbID.toString())
       setgalleria1(filmtrovato)
       filmdetails()
        console.log("funziona")
    },[])
    
    

return(
  <div className="container">
    <div className="row">
        <div className="col-md-12">
            {galleria1===null?(<div>Loading</div>): typeof galleria1 ==="undefined"?(<h2>Loading...</h2>):(
                <>
                
                {console.log("pescheria",galleria1.title)}
                   <Card className='bg-dark' style={{ width: '18rem'}}>
                   <Card.Img variant="top" src={galleria1.Poster} />
                   <Card.Body>
                     <Card.Title className='text-light'>{galleria1.Title}</Card.Title>
                     <Card.Text className='text-light'>
                       {galleria1.Actors} || {galleria1.Plot}
                     </Card.Text>
                     <Button variant="primary">Go somewhere</Button>
                   </Card.Body>
                 </Card>
                 </>
            )}
            
        </div>
    </div>
  </div>
)

}
export default MovieDetails;