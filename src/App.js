import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';


// make 2 tooltips here and another inside the App direct
const firstTooltip = (
  <Tooltip color='hotpink' message='tooltip message'>
    ipsum
  </Tooltip>
)
const secondTooltip = (
  <Tooltip color='#126BCC' message='another tooltip message'>
    officiis
  </Tooltip>
)

function App() {
  return (
    <main className='App'>
      {/* <Split className='left' flexBasis={2}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt {firstTooltip} ex velit suscipit facere officia?<br />
        <Tooltip message='one more tooltip message'>
          necessitatibus?
        </Tooltip>
      </Split>
      <Split className='right'> 
        Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} officiis quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split>
      <Messages name="Messages" unread={0}/>
      <Messages name="Notifications" unread={10}/> */}
      {/* <TheDate />  */}
      {/* <Counter step={1} /> */}
       {/* <HelloWorld />  */}
      {/* <Bomb /> */}
      <RouletteGun />  
    </main>
  );
}

export default App;
