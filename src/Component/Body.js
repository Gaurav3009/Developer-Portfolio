import React, { useContext } from 'react';
import '../App.css';
import Intro from './Intro';
import Info from './Info';
import { MouseContext } from './Data/MouseContext';

function Body() {

  const position = useContext(MouseContext);

  return (
    <div class = "bg-clr-primary w-screen pt-12 px-5 font-semibold flex flex-col sm:flex-col md:flex-col md:pl-16  lg:flex-row lg:px-32 lg:pt-0 ">
        <Intro/>
        <Info/>
    </div>
  )
}

export default Body