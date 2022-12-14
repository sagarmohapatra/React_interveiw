import React from 'react'
import withRouter from '../Hcomponent/withRouter'
const FirstComponent = ({ state, increment, decrement, reset }) => {
    return (
        <div>FirstComponent
            <h1>{state}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default withRouter(FirstComponent)