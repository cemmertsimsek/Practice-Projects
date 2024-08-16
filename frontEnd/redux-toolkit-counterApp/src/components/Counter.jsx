import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementAsync, incrementByAmount } from "../store/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment 5</button>
      <button onClick={() => dispatch(incrementAsync(10))}>Increment 10 Async</button>
    </div>
  );
};

export default Counter;
