import React from 'react';
import ImageCard from './ImageCardSlider/imageCard';
import classes from './second.module.css';
import classesCard from './ImageCardSlider/imageCard.module.css'
import card1 from '../../pics/cards/card1.jpg';
import card2 from '../../pics/cards/card2.jpg';
import card3 from '../../pics/cards/card3.jpg';
import card4 from '../../pics/cards/card4.jpg';
import card5 from '../../pics/cards/card5.jpg';
import card6 from '../../pics/cards/card6.jpg';




type Cards = {
    pics : string[],
    text : string[],
    id   : number
}


function setImage(obj:Cards){
    var cards:any = document.getElementById(`${classesCard.card}`);
    var cap:any = document.getElementById('cap');
    obj.id = (obj.id % obj.pics.length) + 1;

    
    cards.setAttribute('src',`${obj.pics[obj.id-1]}`);
    cap.innerHTML = `${obj.text[obj.id-1]}`;
    setTimeout(()=>setImage(obj),5000)

}

class Second extends React.Component{

    
    componentDidMount(){
        const cards:Cards = {
            pics : [card1,card2,card3,card4,card5,card6],
            text : [
                "Who needs a thousands friend",
                "when one can have you instead😊",
                "a full-crack, with a soft-heart, an honest soul, with a sharp tongue",
                "a day dreamer with lot of sleep😂😂😂",
                "Childish sometimes but always harami🥰🥰",
                "loves babies but never make one😂😂"
            ],
            id : 0
        }
        setImage(cards);
    }
    
    render(){
        return(
            <div className={classes.second} data-aos='flip-left'>
                 <ImageCard/>
            </div>
        )
    }

    
}


export  default Second;