import classes from './fifth.module.css';
import classesFlex from './FlexImage/flexImage.module.css';
import React from 'react';
import pic1 from '../../pics/fifth/fifth1.jpg';
import pic2 from '../../pics/fifth/fifth2.jpg';
import pic3 from '../../pics/fifth/fifth3.jpg';
import pic4 from '../../pics/fifth/fifth4.jpg';
import pic5 from '../../pics/fifth/fifth5.jpeg';
import pic6 from '../../pics/fifth/fifth6.jpg';
import pic7 from '../../pics/fifth/fifth7.jpg';
import pic8 from '../../pics/fifth/fifth8.jpg';
import pic9 from '../../pics/fifth/fifth9.jpeg';
import pic10 from '../../pics/fifth/fifth10.jpg';
import pic11 from '../../pics/fifth/fifth11.jpg';
import pic12 from '../../pics/fifth/fifth12.jpg';
import FlexImage from './FlexImage/flexImage';




function changeImage(Pics:string[],counter:number){
    var img = document.querySelectorAll(`.${classesFlex.flexItem} img`) as NodeListOf<HTMLElement>;
    console.log(img)
    if(counter===0){
        for(let i =0; i < img.length; i++){
            img[i].setAttribute('src',Pics[i]);
        }
        counter =1;
    }
    else if(counter===1){
        for(let i = 0; i < img.length; i++){
            img[i].setAttribute('src',Pics[i+4]);
        }
        counter = 2;
    }
    else{
        for(let i = 0; i < img.length; i++){
            img[i].setAttribute('src',Pics[i+8]);
        }
        counter = 0;
    }
    setTimeout(()=>changeImage(Pics,counter),5000)
}




class Fifth extends React.Component{

    componentDidMount(){
        // console.log('mount');
        const PicSet = [pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8
            ,pic9,pic10,pic11,pic12];
        changeImage(PicSet,0);
    }
    

    render(){
        return(
            <div className={classes.Container}>
                <FlexImage  order={`${classes.flexItemA}`}/>
                <FlexImage  order={`${classes.flexItemB}`}/>
                <FlexImage  order={`${classes.flexItemC}`}/>
                <FlexImage  order={`${classes.flexItemD}`}/>
                <div className={classes.content}>
                    <p>There is a strange attraction with you,<br/>
                    can barely explain, a beautiful bond,<br/>
                    with no name<br/>
                    You could be anything, but choose to be my mate<br/>
                    Thank you for everything and a very happy birthday again....</p>
                </div>
            </div>
        )
    }
    
}

export default Fifth;