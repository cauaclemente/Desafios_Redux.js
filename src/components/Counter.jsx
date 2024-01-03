import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset  } from '../context/CounterSlice';

function Counter ()  {
  
  const count = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <>
    <p>Valor inicial: {count} </p>
    <button onClick={()=>dispatch(increment())}> Aumentar </button>
    <button onClick={()=>dispatch(decrement())}> Diminuir </button>
    <button onClick={()=>dispatch(reset())}> Resetar </button>
    </>
  )
}

export default Counter