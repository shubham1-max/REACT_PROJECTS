
import React from "react";
export default function Die(props) {


// aria-pressed: tells screen readers whether the die (button) is held or not (toggle state)
// aria-label: describes the die value and its current state for accessibility


        const styles={   //if isheld prop is true then only color will change
                backgroundColor:props.isHeld?"#59E391":"white"
            }
            
      

 



    return (

        <>
          <button id="die" 
                 style={styles}  
                onClick={()=>props.hold(props.id)}
                arial-pressed={props.isHeld}
                aria-label={`die with value ${props.value},${props.isHeld ?"held":"not held"}`}
          > {props.value}</button>
        </>


    );
}