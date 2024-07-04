import React from 'react';
import About from './About';
import Experience from './Experience';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Resume from './files/Resume.pdf';
import Project from './Project';
import Writings from './Writings';

function Info() {
  return (
    <div className = "lg:h-screen lg:w-1/2 lg:mt-0 lg:overflow-y-auto">
        <About/>
        <Experience/>
        <div className = "text-white mt-12 text-lg md:mt-20 lg:mt-20">
            <a href = {Resume} target = "_blank">View Full Resume <span><ArrowOutwardIcon sx = {{fontSize: 15}}/></span></a>
        </div>
        <Project/>
        <Writings/>
    </div>
  )
}

export default Info