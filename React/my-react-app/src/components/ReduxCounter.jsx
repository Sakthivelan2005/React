import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../Redux/CreateSlice';

export const ReduxCounter = () => {
    const count = useSelector((state) => state.count)
    const history = useSelector((state) => state.history);
    const dispatch = useDispatch();
    console.log("History: ", history)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment(1))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>

        <br />
        <br />
        <h3>History</h3>
        <ol>
            {history.map((val,idx)=> (
                <p>{`${idx+1}. ${val}`}</p>
            ))}
        </ol>
    </div>
  )
}
