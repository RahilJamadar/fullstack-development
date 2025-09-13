import { useReducer } from "react"
function CountReducer() {
    function reducer(state, action) {
        switch (action.type) {
            case "increment":return { count: state.count + 1 };
            case "decrement":return { count : state.count - 1 };
            default: return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
        <>
            <h1>Count Reducer</h1>
            <h2>Count: {state.count}</h2>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </>
    )
}

export default CountReducer;