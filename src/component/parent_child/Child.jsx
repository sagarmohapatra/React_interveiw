import React from 'react'

// const Child = ({ state, setstate }) => {
//     const [val, setval] = React.useState({ name: "sipu", roll: 29 })
//     console.log(state);
//     const change = () => {
//         setstate(val)
//     }
//     return (
//         <div>
//             <h1>Child</h1>
//             {/* <h5>{val.name}</h5> */}
//             <p>Parent to child:-{state}</p>
//             <button onClick={change}>child to Parent</button>
//         </div>
//     )
// }

class Child extends React.Component {
    state = {
        update: "sagar"
    }
    render() {
        return <div>
            <h1>Parent component</h1>
            <h5>Parent Component:-{this.state.update}</h5>
            <p>Parent to child:-{this.props.p}</p>
            <button onClick={() => {
                this.props.sp(this.state.update)
            }}>child to parent component</button>
        </div>
    }
}
export default Child