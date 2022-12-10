import axios from 'axios'
import React, { useEffect } from 'react'
import "../Pagination/Pagination.css"
import Page from './Page'

const Paginations = () => {
    const [data, setdata] = React.useState([])
    const [showPerPage, setshowPerPage] = React.useState(8)
    const [pagination, setpagination] = React.useState({
        start: 0,
        end: showPerPage
    })
    const onPaginationPage = (start, end) => {
        // console.log(start, end);
        setpagination({ start: start, end: end })
    }

    useEffect(() => {
        fet()
    }, [])
    let fet = async () => {
        let we = await fetch("https://jsonplaceholder.typicode.com/posts")
        let res = await we.json()
        setdata(res)
        // console.log(res);
    }
    return (
        <div>
            <h3>Pagination</h3>
            <div className='row'>
                {data.slice(pagination.start, pagination.end).map((val, id) => {
                    return (

                        <div className='col-md-3' key={id}>
                            <div className='card  '>
                                <div className='card-body'>
                                    <div className='card-title'>Page:{val.id}</div>
                                    <div className="bold">{val.title}</div>
                                    <div className='card-text'>{val.body}</div>
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>

            <Page showPerPage={showPerPage} onPaginationPage={onPaginationPage} total={data.length} />
        </div>

    )
}

export default Paginations