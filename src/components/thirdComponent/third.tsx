import React, { useEffect } from 'react';
import classes from './third.module.css';
import Typed from 'react-typed';



interface Props{
    str : string[]
    img : string
}




const Third:React.FC<Props> = (props)=>{

    useEffect(()=>{
        var cls = document.getElementsByClassName(`${classes.third}`) as HTMLCollectionOf<HTMLElement>;
        Array.from(cls).forEach((item,index)=>{
            item.style.background = "linear-gradient(to right, rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url(" + props.img + ")";
            item.style.backgroundSize ="cover";
            item.style.backgroundAttachment = 'fixed';
        })
        
    })
    return(
        <div className = {classes.third}>
            <div className={classes.Poem}>
                <Typed 
                strings={
                    props.str
                }
                typeSpeed={40}
                loop
                backDelay={10000}
                
                />
            </div>
        </div>
    )
}


export default Third;