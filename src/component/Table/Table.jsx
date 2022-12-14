import React, { useEffect } from 'react'
import TableData from './TableData'
import TableStructue from './TableStructue'

const Table = () => {

    // dataget in local
    const getDataLocal = () => {
        const data = localStorage.getItem("any")
        if (data) {
            return JSON.parse(data)
        } else {
            return []
        }
    }

    const [actual, setactual] = React.useState(getDataLocal())
    console.log(actual);
    const [val, setval] = React.useState({
        f_name: "",
        l_name: "",
        m_number: "",
        password: "",
        age: "",
        gender: ""

    })
    // datasave in localStorege

    useEffect(() => {
        localStorage.setItem("any", JSON.stringify(actual))
    }, [actual])
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-5'>
                    <TableStructue val={val} setval={setval} actual={actual} setactual={setactual} />
                </div>
                <div className='col-md-7'>
                    <TableData actual={actual} setactual={setactual} />
                </div>
            </div>
        </div>
    )
}

export default Table