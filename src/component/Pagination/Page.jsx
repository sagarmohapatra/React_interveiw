import { Button } from 'bootstrap'
import React, { useEffect } from 'react'

const Page = ({ showPerPage, onPaginationPage, total }) => {
    console.log(total);
    console.log(showPerPage);
    const [counter, setcounter] = React.useState(1)
    const [numberOfButton, setnumberOfButton] = React.useState(Math.ceil(total / showPerPage))
    useEffect(() => {
        console.log("counter", counter);
        const value = showPerPage * counter
        // console.log("start value", value - showPerPage);
        // console.log("end value", value);
        console.log(value);
        onPaginationPage(value - showPerPage, value)


    }, [counter])
    const onButtonClick = (type) => {
        if (type === "pre") {
            if (counter === 1) {
                setcounter(1)
            } else {
                setcounter(counter - 1)
            }
        } else if (type === "next") {
            if (numberOfButton === counter) {
                setcounter(counter)
            } else {
                setcounter(counter + 1)
            }
        }
    }
    return (
        <div className='d-flex justify-content-center'>

            <nav aria-label="...">
                <ul class="pagination">
                    <li class="page-item ">
                        <a class="page-link" onClick={() => onButtonClick("pre")}>Previous</a>
                        {/* setcounter(counter - 1) alternative of (setcounter) we can write onButtonClick and pass string (pre) */}
                    </li>


                    {new Array(numberOfButton).fill(" ").map((ele, index) => (
                        <li class="page-item">
                            <a class="page-link" href="!#">{ele}</a>
                        </li>
                    )
                    )
                    }
                    <li class="page-item">
                        <a class="page-link" href="#" onClick={() => onButtonClick("next")}>Next</a>
                        {/* setcounter(counter + 1)alternative of (setcounter) we can write onButtonClick and pass string (pre)  */}
                    </li>
                </ul>
            </nav>
            {/* <button className="btn btn-primary" >Previous</button> */}

            {/* <button className="btn btn-info mx-5" >Next</button> */}

        </div>
    )
}

export default Page