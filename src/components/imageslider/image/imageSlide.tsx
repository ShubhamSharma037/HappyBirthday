import React from 'react';
import classes from './imageSlide.module.css';


interface Props{
    img : string
    children : string,
    emo? : any,
}

const image : React.FC<Props> = (props) =>{
    return(
        <React.Fragment>
            <div className={[classes.slider,classes.hide].join(' ')}>
                <div className={classes.slide}>
                    <div className={classes.overlay}/>
                    <img src = {props.img} alt='Happy Birthday'></img>
                </div>
                <div className={classes.textOverImg}>
                    <h1>{props.children}</h1>
                    <span>{props.emo}</span>
                </div>
            </div>
        </React.Fragment>
    )
}


export default image;