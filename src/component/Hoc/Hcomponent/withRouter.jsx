import React from 'react'

const withRouter = (TakeComponent, initial = 0) => {
    const NewState = () => {
        const [state, setstate] = React.useState(initial)
        const increment = () => {
            setstate(state + 1)
        }
        const decrement = () => {
            setstate(state - 1)
        }
        const reset = () => {
            setstate(initial)
        }
        return <TakeComponent state={state} increment={increment} decrement={decrement} reset={reset} />
    }
    return NewState
}

export default withRouter