import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/index";

export default function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);

  const mdispatch = useDispatch();

  return (
    <div className="App">
      <h1>React-Redux counter = {counter}</h1>
      <button onClick={() => mdispatch(increment())}>+</button>
      <button onClick={() => mdispatch(decrement())}>-</button>
      {isLogged ? <h2>Tiger</h2> : " "}
    </div>
  );
}
