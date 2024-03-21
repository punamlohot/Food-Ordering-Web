import React from 'react'
import { useParams } from 'react-router-dom';


const Dynamic = () => {

    const id = useParams();
    console.log(id);

  return (
    <div className='text-center'>
    <h1>I am Dynamic Component</h1>
    <h3>My Param Id Is {id.id}</h3>
    </div>
  )
}

export default Dynamic;