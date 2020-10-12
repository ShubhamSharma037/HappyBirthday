import classes from './last.module.css';
import React from 'react';




const Last:React.FC = ()=>{

   

    return(
        <React.Fragment>
            <div className={classes.last}>
            <div className={classes.txt}>
                <h1>Happy</h1>
                <h1>Birthday</h1>
                <h1>dear tannu<span role="img" aria-label='emo'>😘😘</span></h1>
            </div>
        </div>
        </React.Fragment>
        
    )
}


export default Last;