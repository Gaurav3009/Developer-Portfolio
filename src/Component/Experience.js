import React from 'react';
import '../App.css';
import { useDataContext } from './Data/Context';

function Experience() {

    const { experience, setExperience } = useDataContext();

  return (
    <div className = "mt-14 text-slate-500 font-normal lg:mt-32">
        <h1 className = "text-white mb-5 text-sm font-bold uppercase tracking-widest lg:hidden">Experience</h1>

        <div>
            {
                experience.map((item, index) => {
                    return (
                        <div className = "lg:flex lg:items-start">
                            <div className = "lg:w-1/4">
                                <p className = "text-xs tracking-wider">{item["start"] + " - " + item["end"]}</p>
                            </div>
                            <div className = "lg:w-3/4">
                                <p className = "text-base tracking-wider text-slate-100" >{item["company"]}</p>
                                <p className = "font-medium text-normal">{item["post"]}</p>
                                <p className = "mt-2 text-sm tracking-wide">{item["description"]}</p>
                                <div className = "flex flex-wrap mt-3">
                                {
                                    item["skills"].map((skill, index) => {
                                        return(
                                            <div className = " px-3 py-1 my-1 mx-2 text-clr-secondary bg-clr-tertiary text-xs rounded-xl md:font-medium lg-font-medium">{skill}</div>
                                        );
                                    })
                                }
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    </div>
  )
}

export default Experience