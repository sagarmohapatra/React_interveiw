import React, { useEffect } from 'react'

const Usefact = () => {
    const [state, setstate] = React.useState(0)
    const [val, setval] = React.useState(0)
    useEffect(() => {
        console.log("hi all");
    }, [state])
    return (
        <div>
            <p>{state}</p>
            <p>{val}</p>
            <button onClick={() => { setstate(state + 1) }}>increment</button>
            <button onClick={() => { setval(val - 1) }}>Decrement</button>
        </div>
    )
}

export default Usefact