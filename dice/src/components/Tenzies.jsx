import React from 'react'
import Dice from"/src/components/Dice.jsx"

const Tenzies = () => {
    const tenzies=[]
    for(let i=0 ; i<10 ; i++){
        const nb=Math.floor(Math.random()*6)
        tenzies.push(<Dice number={nb} />)
    }
    
  return (
    <div className='tenzies'>{tenzies}</div>
  )
}

export default Tenzies