import React, { useEffect } from 'react'

const Featch = () => {
    const [state, setstate] = React.useState([])
    const [data, setdata] = React.useState("")

    let datas = async () => {
        let a = await fetch("https://jsonplaceholder.typicode.com/users")
        let b = await a.json()
        setstate(b)

    }
    console.log(state);
    useEffect(() => {
        datas()
    }, [])
    const deletes = (index) => {
        let copy = [...state]
        copy.splice(index, 1)
        setstate(copy)
    }
    const ser = async (e) => {
        setdata(e.target.value)
        let a = await fetch("https://jsonplaceholder.typicode.com/users?=${data}")
        let b = await a.json()
        setstate(b)
        setdata("")

    }
    return (
        <div>
            <input type="search" placeholder='search here..' onChange={ser} value={data} />
            <table className='table table-striped'>
                <thead>
                    <tr >
                        <th>Sl</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Adress</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>

                    {state.filter((dd) => {
                        if (data === "") {
                            return dd
                        } else if (dd.name.toLowerCase().includes(data.toLowerCase())) {
                            return dd
                        }
                    })

                        .map((val) => {
                            return (
                                <tr>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.email}</td>
                                    <td>{val.address.zipcode}</td>
                                    <td onClick={(index) => { deletes(index) }}><i class="fa-solid fa-trash"></i></td>
                                </tr>
                            )
                        })}

                </tbody>
            </table>
        </div>
    )
}

export default Featch