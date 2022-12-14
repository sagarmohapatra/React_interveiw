import React, { useEffect } from 'react'
import axios from 'axios'
const Search = () => {
    const [data, setdata] = React.useState([])
    const [value, setvalue] = React.useState("")
    const [sortvalue, setsortvalue] = React.useState("")

    const sortOption = ["name", "email", "phone", "address", "status"]

    useEffect(() => {
        loaddata()
    }, [])
    const loaddata = async () => {
        return await axios.get("http://localhost:5000/users")
            .then((res) => setdata(res.data)).catch((error) => console.log(error))

    }
    console.log("hj", data);
    const handleRest = () => {
        loaddata()
    }
    const handleSearch = async (e) => {
        e.preventDefault()
        return await axios.get(`http://localhost:5000/users?q=${value}`)
            .then((res) => {
                setdata(res.data)
                setvalue("")
            })

    }
    const handleSort = async (e) => {

        const value = e.target.value
        setsortvalue(value)
        return await axios.get(`http://localhost:5000/users?_sort=${value}&_order=asc`)
            .then((res) => {
                setdata(res.data)

            })
    }
    const handleFilter = async (value) => {
        return await axios
            .get(`http://localhost:5000/users?status=${value}`)
            .then((res) => {
                setdata(res.data)

            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            <h1>Search, filter, sort using fake json</h1>

            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={value}

                    placeholder='search name'
                    onChange={(e) => setvalue(e.target.value)} />
                <button className='btn btn-dark mx-2' type='submit'>Search</button>
                <button className='btn btn-success mx-2' onClick={() => handleRest()}>Reset</button>
            </form>   {/* we can take onclick on search button  */}

            {
                data.length === 0 ? (
                    <h1>No Data Found</h1>
                ) : (

                    <table className='table  table-hover'>
                        <thead className='thead-dark'>
                            <tr>
                                <th>Serial No:-</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Status</th>


                            </tr>
                        </thead>
                        <tbody>

                            {data.map((val, index) => {
                                return (
                                    <tr key={index} >
                                        <td>{val.id}</td>
                                        <td>{val.name}</td>
                                        <td>{val.email}</td>
                                        <td>{val.phone}</td>
                                        <td>{val.address.city}</td>
                                        <td>{val.status}</td>

                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                )

            }
            <div className='d-flex  justify-content-between'>
                <div className=' mb-5'>
                    <h5>Sort By:</h5>
                    <select
                        onChange={handleSort}
                        value={sortvalue}>

                        <option>Please Select value</option>
                        {sortOption.map((val, index) => {
                            return (
                                <option key={index}>{val}</option>
                            )

                        })}

                    </select>
                </div>
                <div className=' mb-5'>
                    <h5>Filter By Status:</h5>
                    <button onClick={() => handleFilter("active")} className="btn btn-success">Active</button>

                    <button onClick={() => handleFilter("inactive")} className="btn btn-info">Inactive</button>
                </div>
            </div>
        </div >
    )
}

export default Search