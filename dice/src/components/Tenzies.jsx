import React from 'react'
import Dice from"/src/components/Dice.jsx"
import { useState } from 'react'
const Tenzies = () => {

  const [tenzie,setTenzie]=useState(false)
  const [dices, setDices] = useState(newDices())

  function newDices(){
    const dices=[]
    for(let i=0 ; i<10 ; i++){
      dices.push({
        number:Math.floor(Math.random()*6),
        isHeld:false,
        id:i
      })}
  return dices }

  React.useEffect(() => {
    setTenzie( dices.length>0 && dices.every(dice => dice.isHeld))
    }, [dices]);
  function hold(id){
    setDices(oldDice => {
        return (oldDice.map(dice => dice.id===id ? {...dice , isHeld:!dice.isHeld} : dice ))
    })}
  
    const allDice=dices.map(dice => {return (
    <Dice   key={dice.id}  
            id={dice.id} 
            hold={() => hold(dice.id)} 
            nb={dice.number}  
            isHeld={dice.isHeld}
            /> 
          )})
      
          function Roll(){
             
            if(!tenzie){
              console.log("not tenzies")
            setDices(oldDice=>{
              return oldDice.map(dice=>{
                return (
                  dice.isHeld? dice : {...dice, number:Math.floor(Math.random()*6)}
                )})})}
              else{
                const nb=dices[0].nb
                let test=true 
                for (let i=1; i<10; i++){
                  if (dices[i].nb !=nb){
                    test=false}

                }
                if(test){
                  setTenzie(false)
                  setDices(()=>newDices())
                }
              }
              
              }
                
                
  return (
    < div>
      <div className='tenzies'>{allDice}</div>
      <button  onClick={()=>Roll()} className="roll">Roll</button>
    </div>
)}
export default Tenzies