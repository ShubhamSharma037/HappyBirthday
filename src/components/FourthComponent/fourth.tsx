import React from 'react';
import classes from './fourth.module.css';




interface Props{
    str : string
    img : string
}



const Fourth:React.FC<Props> = (props)=>{

    return(
        
        <div className = {classes.fourth} >
            <img src={props.img} id={classes.img} alt='alt' data-aos='zoom-in'/>
            <div className={classes.Poem}>
                <p data-aos='flip-down' data-aos-duration='20000'>{props.str}</p>
                <span role="img" aria-label='emo'>😚😚😚</span>
            </div>
        </div>    
        
        
    )
}


export default Fourth;