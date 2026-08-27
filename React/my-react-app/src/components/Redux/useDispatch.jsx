import { useEffect } from 'react';
import {useDispatch} from 'react-redux';

const dispatch = useDispatch();
useEffect(() => {
    dispatch(fetchBooks());
},[])


//usage

function Counter () {
    const count = useSelector(state => state.count)

    return (
        <div>
            <h1>Counter: {count}</h1>
        </div>
    )
}                       