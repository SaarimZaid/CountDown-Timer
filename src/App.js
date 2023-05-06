import { useEffect, useState } from "react";
import './app.css';

function App() {

  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [flag, setFlag] = useState(false);


  const start = (e) => {
    if(e.key === 'Enter'){
      setMinutes(parseInt(e.target.value));
      setSeconds(0)
      setFlag(true);
    }
  }

  useEffect(()=>{
    if(flag){
      const interval = setInterval(()=>{
        if(parseInt(seconds)===0 && parseInt(minutes)!==0){
          setSeconds(seconds => seconds + 59)
          setMinutes(minutes => minutes - 1)
        }else if(parseInt(seconds)===0 && parseInt(minutes)===0){
        }else{
          setSeconds(seconds => seconds - 1)
        }
      }, 1000)
      return () => {
        clearInterval(interval)
      }
    }
  },[seconds, minutes, flag])

  return (
    <div className="timer">
      <h1>CountDown Timer</h1>
      <div className="input-field">
        <input type="number" min='1' onKeyDown={start} placeholder="Set minutes count" />
      </div>
      <div className="value">
        <span className="minutes">{minutes < 10 ? `0${minutes}` : minutes}:</span>
        <span className="seconds">{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
      <div className="fivesec">{seconds === 5 && minutes === 0 ? '5 seconds left': ''}</div>
    </div>
  );
}

export default App;
