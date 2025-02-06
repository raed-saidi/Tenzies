import React from 'react'
import Tenzies from '/src/components/Tenzies.jsx';
import Header from '/src/components/Header.jsx';

const App = () => {
  return (
    <main >
          <Header />
         <Tenzies/>
         <button className="roll">Roll</button>
        
     
    </main>
  )
}

export default App