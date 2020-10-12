import React from 'react';
import classes from './imageCard.module.css';




const imageCard:React.FC = () =>{
    return(
        <div className={classes.photo_area}>
            <div className={classes.photo}>
                <img id={classes.card} src='' alt='card'></img>
            </div>
            <div className={classes.photo_cap}>
                <p id='cap'>
   
                </p>
            </div>
        </div>
    )
}


export default imageCard;