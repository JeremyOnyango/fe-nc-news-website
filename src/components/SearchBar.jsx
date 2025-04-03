import { useState } from "react"

export const SearchBar = ({setSearchTerm}) => {
    const [searchInput, setSearchInput] = useState("")

    const handleChange = (event) => {
        setSearchInput(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        setSearchTerm(searchInput)
        setSearchInput("")
    }

    return(
    <form  className="searchbar dashboard" onSubmit={handleSubmit}>
        <label>
            <input type="text" onChange={handleChange} value={searchInput}/>
        </label>
        <button type="submit"> Search </button>
    </form>
    )
}