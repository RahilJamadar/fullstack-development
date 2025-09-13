import { useState } from "react"

function Counter(){

    const [count, setCount] = useState(0)
    return <>
    <h1>Click Counter </h1>
    <button onClick={()=>setCount(count +1)} > Button Clicked {count} times</button>
    <br />
    <br />
    
    <button onClick={()=>setCount(0)}>Reset Counter</button>
    </>
}

export default Counter