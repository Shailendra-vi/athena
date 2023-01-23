import React, { useEffect, useState } from 'react'

const Left = () => {
    const [table, setTable] = useState([])
    const fetchData = () => {
        fetch("https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setTable(data.texts)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='left'>
            {table.map((a)=>{
                return <div>
                    <h3>{a["heading"]}</h3>
                    <h1>{a["subHeading"]}</h1>
                    <h5>{a["description"]}</h5>
                </div>
            })}
        </div>
    )
}

export default Left