import React from 'react';
import classes from './first.module.css';




class First extends React.Component{



    render(){
        return(
            <div className={classes.first} data-aos='fade-right'>
                <div className={classes.text} data-aos='fade-up'>
                    <h3>Being beautiful is good,</h3>
                    <h3>But Being good is more beautiful....</h3>
                    <h3>and you... <br/><br/>you are both dear friend</h3>
                    <span role='img' aria-label='emoticons'>🤗🤗🤗</span>
                </div>
            </div>
            
        )
    }
    
}

export default First;