import React from 'react'

const TableStructue = ({ val, setval, actual, setactual }) => {
    console.log(val);
    const putData = (e) => {
        let copyval = { ...val }
        // copyval(e.target.value)
        copyval[e.target.name] = e.target.value
        setval(copyval)

    }
    const check = (e) => {
        const copyvals = { ...val }
        copyvals[e.target.checked] = e.target.value
        setval(copyvals)
    }

    const login = (e) => {
        console.log("sdfg");
        e.preventDefault()
        const copydata = [...actual]
        copydata.push(val)

        setactual(copydata)
        setval({
            f_name: "",
            l_name: "",
            m_number: "",
            password: "",
            age: "",
            gender: ""
        })
    }
    return (
        <div className='mt-3'>
            <div className='card bg-light'>
                <div className='card-head'>
                    <h3 className='bg-primary text-white py-3 mt-2 '>Registration Here</h3>
                </div>
                <div className='card-body'>
                    <form onSubmit={login}>
                        <input type="text" placeholder='First Name' className='form-control mt-2' value={val.f_name} name="f_name"
                            onChange={putData}
                        />

                        <input type="text" placeholder='Last Name' className='form-control mt-4' value={val.l_name} name="l_name"
                            onChange={putData} />

                        <input type="text" placeholder='Mobile Number' className='form-control mt-4' value={val.m_number} name="m_number"
                            onChange={putData} />
                        <input type="password" placeholder='Password' className='form-control mt-4' value={val.password} name="password"
                            onChange={putData} />
                        <input type="text" placeholder='Age' className='form-control mt-4' value={val.age} name="age"
                            onChange={putData} />



                        <div className='mb-2 mt-2 row'>
                            <div className='col-md-2'>
                                <label>Gender:</label>
                            </div>

                            <div className='col-md-3'>
                                <input type="radio" name='gender' value={val.gender} onChange={check} />Male
                            </div>

                            <div className='col-md-3'>
                                <input type="radio" name='gender' value={val.gender} onChange={check} />Femal
                            </div>

                        </div>


                        <div className='text-center mt-4'>
                            {/* <input type="button" value="login" className='bg-primary text-white btn btn-outline' /> */}
                            <button className='bg-primary text-white btn btn-outline'>login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TableStructue