import React from 'react';
import Sdata from './Sdata';
import Card from './Card';



function Services(props) {






  return (
   <>
      <div className="container my-5">
      <h1 className='fs-3  text-center'>This is {props.name} page</h1>
        <div className="row gy-3 my-4 justify-content-center align-items-center">
        

          { Sdata.map((CurElem, index)=>{
            return (
              <Card key={index}
              imgsrc={CurElem.imgsrc} 
                 title = {CurElem.title} 
              />
            )
          }) }

          
           
        </div>
      </div>
   </>
  );
}

export default Services;
