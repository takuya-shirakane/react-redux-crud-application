import React, { useState } from 'react';

const App = () => (<Counter></Counter>)

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const handlePlus = () => { setCount(count + 1) }
  const handleMinus = () => { setCount(count - 1) }

  return (
    <React.Fragment>
      <div>counter:{count}</div>
      <button onClick={handlePlus}>+1</button>
      <button onClick={handleMinus} >-1</button>
    </React.Fragment>
  )
}

export default App;
