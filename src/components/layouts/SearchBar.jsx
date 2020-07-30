import React, { useState } from 'react'
import "../../styles/header.scss"
import { Redirect } from 'react-router-dom'

const SearchBar = () => {
    const [value, setValue] = useState("")
    const [redirect, setRedirect] = useState(false)
    const [endpointValue, setEndpointValue] = useState("")

    const handleSearch = () => {
        if (value === "") return null
        setEndpointValue(value)
        setRedirect(true)
    }
    return (
        <div className="search-container">
            {
                redirect && <Redirect to={`/query=${endpointValue}`}/>
            }
            <input
                type="search"
                value={value}
                name="search"
                id="search"
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={handleSearch}><span role="img" aria-label="search">🔍</span></button>
        </div>
    )
}


export default SearchBar