import React from 'react';
import {useParams} from 'react-router-dom';
const DemoTest = () => {
    const {id}=useParams();
  return (
    <div>Hello {id}</div>
  )
}

export default DemoTest