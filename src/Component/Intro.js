import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';



function Intro() {
  return (
    <div className = "lg:w-1/2 lg:pl-10 lg:py-24 lg:pt-20 lg:h-screen lg:flex lg:flex-col lg:justify-between">
        <div>
          <h1 className = "text-white text-4xl md:text-5xl md:font-bold lg:text-5xl lg:font-bold">Gaurav Pandey</h1>
          <h3 className = "text-slate-200 text-lg mt-3 md:text-xl md:tracking-wide lg:text-xl lg:tracking-wide">Full Stack Developer</h3>
          <p className = "text-slate-400 font-normal mt-3 lg:pr-32">I build scalable backend code engaging websites giving the user best experience.</p>
        </div>
        <div className = "mt-4">
            <a href = "https://github.com/Gaurav3009" target = "_blank" rel = "noopener" ><GitHubIcon sx = {{color: "grey", fontSize : 30}}/></a>
            <a href = "https://www.linkedin.com/in/gaurav-30-pandey/" target = "_blank" rel = "noopener" className = "ml-5 sm:ml-5 md:ml-5  lg:ml-5"><LinkedInIcon sx = {{color: "grey", fontSize : 30}}/></a>
            <a href = "https://x.com/GauravP96789777" target = "_blank" rel = "noopener" className = "ml-5 sm:ml-5 md:ml-5 lg:ml-5"><XIcon sx = {{color: "grey", fontSize : 30}}/></a>
            <a href = "https://www.instagram.com/gauravisonline/" target = "_blank" rel = "noopener" className = "ml-5 sm:ml-5 md:ml-5 lg:ml-5"><InstagramIcon sx = {{color: "grey", fontSize : 30}}/></a>
        </div>
    </div>
  )
}

export default Intro