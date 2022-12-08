import React from 'react'
import Child from './Child'
// import Child from './Child'

// const Parent = () => {
//     const [state, setstate] = React.useState({ name: "sagar", roll: 23 })

//     return (
//         <div>
//             <h1>Parent</h1>
//             <h5>{state.name}</h5>

//             <Child state={state.name} setstate={setstate} />
//         </div>
//     )
// }

class Parent extends React.Component {
    state = {
        value: "sipu"
    }
    vs = (value) => {
        this.setState({
            value: value
        })
    }
    render() {
        return <div>
            <h1>Parent component</h1>
            <h5>Child Coponent:-{this.state.value}</h5>
            <Child p={this.state.value} sp={this.vs} />
        </div>
    }
}
export default Parent