import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Die from './Die'
import React from 'react'
import { nanoid } from 'nanoid'
import Confetti from "react-confetti"   //it is for celebration after winning as it is component
import Celebration from "./assets/FA9LA.mp3"
function App() {

  const [num, setnum] = React.useState(() => allnewdice())


  const allheld = num.every(die => die.isHeld);
  const allSameValues = num.every(die => die.value)

    const GameWon=allheld && allSameValues;
  // if (allheld && allSameValues){    //important to undrstand .everymethod) {
  //   console.log("Game Won!");
  
  // }







    function allnewdice() {
      console.log("newArray!")
      return new Array(10)
        .fill(0)
        .map(() => ({
          value: Math.floor(Math.random() * 6 + 1),
          isHeld: false,
          id: nanoid()
        }))
      //const dice=[];
      //   let i=0;
      //   while(i<10){

      //       const random= Math.floor(Math.random()*6+1);
      //       dice.push(random);
      //       i=i+1;
      //   }
      //  return dice;
    }
  // console.log(allnewdice())

  // const [check, setcheck]= React.useState(props.isHeld)





  const diceelement = num.map((prev) => {
    return <Die value={prev.value}
      isHeld={prev.isHeld}
      id={prev.id}
      hold={hold}
    
    />
  })

  //different approach
  function hold(id) {
    // console.log(id)
    setnum(prev =>
      prev.map(die =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die

      ))
  }

  function roll(isHeld) {
      if(!GameWon){
        setnum(prev =>
      prev.map(die =>
        die.isHeld === !isHeld ? die : { ...die, value: Math.floor(Math.random() * 6 + 1) }

      ))
      }

  }
  if (GameWon) {
      const audio = new Audio(Celebration);
      audio.volume = 0.8;      // set volume correctly
      audio.currentTime = 0;   // restart sound
      audio.play();
  }

  function newgame() {        //own method to just start the new game
        setnum(allnewdice())

  }
        const buttonref=React.useRef(null)
    React.useEffect(()=>{             // we are  trying to manupilate dom so we required .useeffect()and useref()to target the DOM.
                             
       if (GameWon && buttonref.current) {
    buttonref.current.focus();
  }

    },[GameWon])


  return (
    <>
      {GameWon && <Confetti />}

      <div id='main'>
          <div arial-live="polite" className='sr-only'>
            {GameWon&& <p>Congrulation! YOU WON ! press "New Game" to start again.</p>}
          </div>
        <div id='white'>
          <h1 className="title">Tenzies</h1>
          <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div id='dice-container'>
            {diceelement}
          </div>

          {GameWon ? <button id='NewGame' ref={buttonref} onClick={newgame}>New Game</button> : <button id='rollbutton' onClick={() => roll(num.isHeld)}>Roll</button>}

        </div>
      </div>

    </>
  )
}

export default App
