import React, { PureComponent } from "react";
class Purecomponent extends PureComponent {
    state = {
        userName: "sipu",
        age: "",
        address: {
            states: "odisha"
        }
    }
    nameChange = () => {
        console.log("updateName");
        this.setState({
            userName: "sagr"
        })
    }
    ageChage = () => {
        console.log("updateage");
        this.setState({
            age: 24
        })
    }
    address = () => {
        console.log("hi");
        this.setState({
            address: {
                states: "america"
            }
        })
    }
    componentDidMount() {
        console.log("updatecomponent");
    }
    render() {
        console.log("update page");
        return (

            < div >
                <p>name:{this.state.userName}</p>
                <p>age:{this.state.age}</p>
                <p>address:-{this.state.address.state}</p>
                <button onClick={() => this.nameChange()}>name</button>
                <button onClick={() => this.ageChage()}>age</button>
                <button onClick={() => this.address()}>address</button>
            </div >

        )
    }
}
export default Purecomponent