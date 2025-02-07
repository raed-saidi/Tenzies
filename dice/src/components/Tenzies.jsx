import React from 'react';
import Dice from "/src/components/Dice.jsx";
import { useState } from 'react';
import Confetti from "react-confetti";

const Tenzies = () => {
  const [tenzie, setTenzie] = useState(false);
  const [dices, setDices] = useState(newDices());

  function newDices() {
    const dices = [];
    for (let i = 0; i < 10; i++) {
      dices.push({
        number: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: i,
      });
    }
    return dices;
  }

  React.useEffect(() => {
    setTenzie(dices.length > 0 && dices.every(dice => dice.isHeld));
  }, [dices]);

  function hold(id) {
    setDices(oldDice => {
      return oldDice.map(dice => 
        dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice
      );
    });
  }

  const allDice = dices.map(dice => (
    <Dice
      key={dice.id}
      id={dice.id}
      hold={() => hold(dice.id)}
      nb={dice.number}
      isHeld={dice.isHeld}
    />
  ));

  function Roll() {
    if (!tenzie) {
      setDices(oldDice => {
        return oldDice.map(dice => 
          dice.isHeld ? dice : { ...dice, number: Math.floor(Math.random() * 6) + 1 }
        );
      });
    } else {
      const number = dices[0].number;
      const allSame = dices.every(dice => dice.number === number);
      if (allSame) {
        setTenzie(false);
        setDices(newDices());
      }
    }
  }

  return (
    <div className="container">
      {tenzie && <Confetti />}
      <div className="tenzies">{allDice}</div>
      <button onClick={Roll} className="roll">Roll</button>
    </div>
  );
};

export default Tenzies;