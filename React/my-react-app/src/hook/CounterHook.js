import { useState } from "react";

function useCounter(){
    const [count, setCount] = useState(0);
    const increment = () => setCount(pre => pre + 1);
    const decrement = () => setCount(count - 1);

    return {
        count,
        increment,
        decrement
    }
}

export default useCounter;
