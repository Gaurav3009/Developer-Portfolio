import React from 'react';
import { useDataContext } from './Data/Context';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function Project() {

    const { project, setProject } = useDataContext();


  return (
    <div className = "mt-14">
         <h1 className = "mb-5 text-sm font-medium tracking-widest text-white uppercase lg:hidden">Projects</h1>
         <div>
            {
                project.map(({name, description, url, image}, index) => {
                    return (
                        <div className = "my-14 lg:flex lg:flex-row-reverse ">
                            <div className = "lg:w-2/3"> 
                                <a href = {url} target = "_blank" rel = "noopener" className = "text-base tracking-wider text-slate-100 hover:text-clr-secondary transition-colors">{name} <span><ArrowOutwardIcon sx = {{fontSize:12}}/></span></a>
                                <p className = "mt-2 text-sm font-normal tracking-wide text-slate-500">{description}</p>
                            </div>
                            <div className = "lg:w-1/3 h-32">
                                <img className = "h-32 mt-2 rounded-xl md:h-20 md:w-40 lg:h-20 lg:w-40" src = {image} alt = {name}/>
                            </div>
                        </div>
                    );
                })
            }
         </div>
    </div>
  )
}

export default Project