import React from 'react';
import classes from './flexImage.module.css';

type Props = {
    order : string;
    
}

const flexImage : React.FC<Props> = (props) =>{

    // let cls = [`${classes.flexItem+props.order}`, classes.flexItem];

    return(
        <div className={[props.order, classes.flexItem].join(' ')}>
                    <img src ='' alt='img'/>
                </div>
    )
}


export default flexImage;