import styles from "./mapButton.module.scss"
import React, { useState, useEffect, ReactNode } from "react";

interface Props {
  openTime: number;
  closeTime: number;
  top: number;
  left: number;
  imgUrl: string;
  openPopup: (locationId: number) => void;
  locID: number;
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}




function addZero(i) {
  if (i < 10) {i = "0" + i}
  
  return i;
}

const d = new Date();

const MapButton: React.FC<Props> = ({...props}) => {
  
  const size = useWindowSize();
  //console.log(size.height)
  //console.log(size.width)
  let h = (d.getHours());
  let m = (d.getMinutes());
  let minutes = h*60+m;
  let opentime, closetime=0;


  if (props.openTime.toString().length == 3){
    opentime = Number(props.openTime[0]*60)+Number(props.openTime[1])
  } else if (props.openTime.toString().length == 4){
    opentime = Number(props.openTime[0]*60*10)+Number(props.openTime[1]*60)+Number(props.openTime[2])
  }
  
  if (props.closeTime.toString().length <4){
    //console.log(333)
    closetime = Number(props.closeTime[0]*60)+Number(props.closeTime[1])
  
  } else if (props.openTime.toString().length <5){
    //console.log(222)
    closetime = Number(props.closeTime[0]*60*10)+Number(props.closeTime[1]*60)+Number(props.closeTime[2])
  }

 const SCALER = 0.25* (size.height/760)
 const SCALER2 = 0.25* (size.width/1536)


  return (
    
    <div>
      <button 
      onClick = {() => {props.openPopup(props.locID)}} /* TODO: Replace 0 with location ID. */
      style={{ 
        backgroundImage: "url(" + props.imgUrl + ")",
        position: 'absolute', 
        top:  props.top * SCALER,
        left: props.left * SCALER2,
        zIndex: 1
      }} 
      className = {(minutes <= (closetime) && minutes >=  (opentime)) ? styles.button : styles.buttonNO} type="submit"
      >
      </button>
    </div>


    )
}; 

export default MapButton;
