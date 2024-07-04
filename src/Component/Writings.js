import React from 'react';
import { useDataContext } from './Data/Context';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function Writings() {

    const {writings, setWritings} = useDataContext();

  return (
    <div className = "mt-14">
        <h1 className = "mb-5 text-sm font-medium tracking-widest text-white uppercase lg:hidden">Writing</h1>
        <div>
            {
                writings.map(({name, year, link, image}, index) => {
                    return (
                        <div className = "mb-5 flex flex-row items-center">
                            <div className = "w-1/3">
                                <img className = "h-15 w-20 mt-2 rounded-xl md:h-30 md:w-40 lg:h-30 lg:w-40" src = {image}></img>
                            </div>
                            <div className = "w-2/3">
                                <p className = "text-slate-500 font-light text-sm">{year}</p>
                                <a  href = {link} target = "_blank" rel = "noopener" className = "text-base tracking-wider text-slate-100 hover:text-clr-secondary transition-colors">{name}<span><ArrowOutwardIcon sx = {{fontSize:12}}/></span></a>
                            </div>
                        </div>
                    );
                })
            }
        </div>

    </div>
  )
}

export default Writings