import React from 'react';
import { useDataContext } from './Data/Context';

function Project() {

    const { project, setProject } = useDataContext();

  return (
    <div className = "mt-14">
         <h1 className = "text-white mb-5 text-sm font-medium uppercase tracking-widest lg:hidden">Projects</h1>
         <di>
            {
                project.map(({name, description, url, image}, index) => {
                    return (
                        <div className = "my-14">
                            <div>
                                <p className = "text-base tracking-wider text-slate-100">{name}</p>
                                <p className = "mt-2 text-sm tracking-wide text-slate-500 font-normal">{description}</p>
                            </div>
                            <div>
                                <img src = {image} alt = {name}/>
                            </div>
                        </div>
                    );
                })
            }
         </di>
    </div>
  )
}

export default Project