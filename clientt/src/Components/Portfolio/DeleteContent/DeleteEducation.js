import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
const DeleteEducationdata = () => {
  const { id } = useParams();
  const History = useHistory();
    const Deletecard = async (e) =>
     {
       // e.preventDefault();
        console.log('step 1');
        const res = await fetch(`/deleteEducationdata/${id}`, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                
            },
           
            
        });
    if(res.modifiedCount !== 0)
        window.alert("Documennt is Deleted");
    else
        window.alert("Document is Not Deleted")
        History.push('../about');
  }
  
    useEffect(() => {
        Deletecard();
    }, []);
  return (
    <div>
      
    </div>
  )
}

export default DeleteEducationdata
