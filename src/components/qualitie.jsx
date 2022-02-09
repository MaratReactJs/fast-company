import React from "react";

const Qualitie = ({quality}) => {
    
    return <>
    <span  
    className={`badge bg-${quality.color} me-2`}>{quality.name}</span>
    </>
   };
   
   export default Qualitie;