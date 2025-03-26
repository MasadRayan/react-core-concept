import { Suspense } from 'react';
import './App.css';
import Counter from './Counter';
import Player from './Player';
import Users from './Users';

const fetchUser = fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())

function App() {

  function handleClick1() {
    alert("Click 1");
  }
  const handleClick3 = () => {
    alert("Click3")
  }

  const handleAdd = (number) => {
    let newnum = number + 5;
    alert(newnum);
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Suspense fallback={<p>Loading....</p>}>
        <Users fetchUser={fetchUser}></Users>
      </Suspense>
      <Player player="Tamim Iqbal"></Player>
      <Counter></Counter>
      <button onClick={handleClick1}>Click me1</button>
      <button onClick={function handleClick2() {
        alert("click 2");
      }}>Click me 2</button>

      <button onClick={handleClick3}>Click me 3</button>

      <button onClick={() => handleAdd(10)}>Add 5</button>
    </>
  )
}

export default App
