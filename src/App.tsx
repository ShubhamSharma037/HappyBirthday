import React, { useEffect, useState } from 'react';
import classes from './App.module.css';
import StartButton from './components/StartButton/startButton';
import MainPage from './components/MainPage/mainpage';
import Aos from 'aos';
import 'aos/dist/aos.css';


interface State{
  start : boolean;
}


const App: React.FC = () => {

  useEffect(()=>{
    Aos.init({duration : 1000});
  },[]);


  const [state, setState] = useState<State>({start:true});

  const startOff = (e:React.MouseEvent<HTMLInputElement>) =>{
    setTimeout(()=>{
      setState({
        start : !state.start,
      });
    }, 1600);
  }

  
  let startPage: JSX.Element = <StartButton clickHandler={startOff} />
  
  if(!state.start){
    startPage = <MainPage/>
  }

  

  return (
    <div className={classes.App}>
      {startPage}
    </div>
  );
}

export default App;
