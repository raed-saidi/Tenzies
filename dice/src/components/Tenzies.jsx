import React from 'react'
import Dice from"/src/components/Dice.jsx"
import { useState } from 'react'
const Tenzies = () => {
    const [tenzies,setTenzies] =useState(false)
    
    function newDices(){
      const dices=[]
      for(let i=0 ; i<10 ; i++){
        dices.push({
          number:Math.floor(Math.random()*6),
          isHeld:false,
          id:i
        })}
    return dices }
    const [dices, setDices] = useState(newDices())
    function hold(id){
      setDices(oldDice => {
          return (oldDice.map(dice => dice.id===id ? {...dice , isHeld:!dice.isHeld} : dice ))
      })
    }
    const allDice=dices.map(dice => {return (
    <Dice   key={dice.id}  
            id={dice.id} 
            hold={() => hold(dice.id)} 
            nb={dice.number}  
            isHeld={dice.isHeld}
            /> 
          )})
          function Roll(){
            setDices(oldDice=>{
              return oldDice.map(dice=>{
                return (
                  dice.isHeld? dice : {...dice, number:Math.floor(Math.random()*6)}
                )
              })
            })


          }

  return (
    < div>
      <div className='tenzies'>{allDice}</div>
      <button  onClick={()=>Roll()} className="roll">Roll</button>
    </div>
      
  )
}

export default Tenzies