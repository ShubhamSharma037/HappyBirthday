import React from 'react';
import classes from './mainPage.module.css';
import ThirdImg from '../../pics/third.jpg';
import FourthImg from '../../pics/fourth.jpg';
import ImageSlider from '../imageslider/imageslider'
import First from '../firstComponent/first';
import Second from '../secondComponent/second';
import Third from '../thirdComponent/third';
import Fourth from '../FourthComponent/fourth';
import Fifth from '../fifthComponent/fifth';
import Last from '../Last/last';
import Useless from '../useless/useless';



type State = {
    showLast : boolean;
}



class MainPage extends React.Component{



    state : State = {
        showLast : false
    }
    
    scrollFunc = ()=>{
        if(document.documentElement.scrollTop >= 3900){
            this.setState({showLast:true})
        }
        else{
            this.setState({showLast:false})
        }
    }
    componentDidMount(){
        window.onscroll = this.scrollFunc
    }
    
    render(){
        return(
            <div className={classes.container}>
                <ImageSlider/>
                <First />
                <Second/>
                <Third
                    str = {["You came as a ray of light<br/>Made my life cheerful and bright<br/>Showering your affection over me<br/>So that my face was full of glee<br/>Taking away my complete loneliness<br/>And giving me back all the happiness<br/>With a Midas touch of your care<br/>To keep me away from despair.<br/>I'll never leave you midway,<br/>And tales of our bond people will say","When you're feeling down and blue<br/>And life is being cruel to you<br/>Just remember you're not on your own.<br/>I'm always there; you're never alone.<br/>You might not be able to see my face<br/>As hard as you look around the place<br/>But close your eyes and think of me<br/>And before you know it, there will be me<br/>Keep me in the midst of your mind<br/>And life will seem easier, I think you'll find<br/>So when life gets too dark to bear<br/>Just close your eyes and I will be there<br/>"]}
                    img={ThirdImg}
                />   
                <Fourth 
                    str="
                    When you smile, 
                    I get a reason to cheer,
                    All the special moments so rare, 
                    All the things my dear,
                    With you, life is so meaningful, 
                    My friend you are truly wonderful, 
                    Love you a lot!"
                    img={FourthImg} 
                />
                <Fifth/>
                {this.state.showLast?<Last/>:<Useless/>}            
            </div>
        )
    }
    
}


export default MainPage;