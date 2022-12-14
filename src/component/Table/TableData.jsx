import React from 'react'

const TableData = ({ actual, setactual }) => {
    console.log(actual);
    const remove = (index) => {
        let copyactual = [...actual]
        copyactual.splice(index, 1)
        setactual(copyactual)
    }
    return (

        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Sl</th>
                    <th>First Name</th>
                    <th>Last  Name</th>
                    <th>Mobile Number</th>
                    <th>Password</th>
                    <th>Age</th>
                    <th>Gender</th>
                </tr>

            </thead>

            {actual.map((val, index) => {

                return (
                    <tbody key={index}>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{val.f_name}</td>
                            <td>{val.l_name}</td>
                            <td>{val.m_number}</td>
                            <td>{val.password}</td>
                            <td>{val.age}</td>
                            <td>{val.gender}</td>
                            <td style={{ cursor: "pointer" }} onClick={() => remove(val.index)}>Delete</td>
                        </tr>
                    </tbody>
                )

            })}

        </table>

    )
}

export default TableData