import React from 'react';
import classes from './startButton.module.css';

interface Btnprops{
    clickHandler : (e:React.MouseEvent<HTMLInputElement>) =>void;
    
}


//Simple javascript to fadeout component

const fadeOut = () =>{
    let container = document.getElementById('main');
    let inputEl = document.querySelector('input');
    if(inputEl?.checked){
        document.querySelector('section')?.classList.add(`${classes.partyTextOn}`)
        setTimeout(()=>{
            container?.style.setProperty('opacity','0',);
        },800)
    }
    else{
        document.querySelector('section')?.classList.remove(`${classes.partyTextOn}`)
    }
}

window.onchange = fadeOut




//Component
class StartButton extends React.Component<Btnprops>{

    render(){
        return(
            <div className={classes.start} id='main'>
                <section className={classes.partyText}>
                    <h2 >Let's the party begins...</h2>
                    <h2>Click on the button below</h2>
                </section>
                <input  
                    onClick={this.props.clickHandler}
                    className={classes.custombtn} 
                    type='checkbox'/> 
            </div>
        )
    }
    
}


export default StartButton;