import React from 'react'


const Stateup = () => {
    const [state, setstate] = React.useState()
    const [sub, setsub] = React.useState()
    const add = (e) => {

        setstate(e.target.value)
    }
    const click = () => {
        setsub(state)
        setstate("")
    }
    return (
        <div>
            <h1>hello {sub}</h1>
            <input placeholder='text here' type="text" value={state} onChange={add} />
            <br />
            <button onClick={click} >Click Here</button>

        </div>
    )
}

export default Stateup