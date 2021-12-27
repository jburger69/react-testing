import './App.css';
import {useState} from 'react';
import Header from './components/Header';
import Decreasebutton from './components/DecreaseButton';
import Increasebutton from './components/IncreaseButton';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <h1>You Clicked {count} times!</h1>
      <Increasebutton count={count} setCount={setCount}/>
      <Decreasebutton count={count} setCount={setCount}/>
    </div>
  );
}

export default App;
