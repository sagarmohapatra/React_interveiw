import React from 'react'
import withCounter from '../Hcomponent/withRouter'
function SecondComponent({ increment, decrement, state, reset }) {
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default withCounter(SecondComponent)