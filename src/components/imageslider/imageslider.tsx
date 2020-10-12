import React from 'react';
import classes from './imageslider.module.css';
import classesSlide from './image/imageSlide.module.css';
import Image from './image/imageSlide';
import pic1 from '../../pics/slides/slide1.jpg'
import pic2 from '../../pics/slides/slide2.jpg'
import pic3 from '../../pics/slides/slide3.jpg'
import pic4 from '../../pics/slides/slide4.jpg'



function carousel(id:number) {
    var x:any = document.getElementsByClassName(`${classesSlide.hide}`);
    for( let i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    id = (id % x.length) + 1;
    x[id-1].style.display = "block";  
    setTimeout(()=>carousel(id), 3000); // Change image every 3 seconds
}
 

class imageSlider extends React.Component{
    
    componentDidMount(){
        var myIndex:number = 0;
        carousel(myIndex);
    }
    

    render(){
        return(
            <div data-aos='fade-up' className={classes.wrapper}>
                <Image img={pic1} emo='🥳🥳🥳'>
                    Happy birthday to you dear bestiee
                </Image>
                <Image img={pic2} emo='😁😁'>
                    The most coolest, funkiest and chutiest girl of my life 
                </Image>  
                <Image img={pic3} emo='🤩🤩'>
                    the girl who always slays with her natural beauty
                </Image>  
                <Image img={pic4} emo='🎉🎉🎉'>
                    my only fav person happy birthday to you  
                </Image>  
            </div>
        )
    }
    
}


export default imageSlider;