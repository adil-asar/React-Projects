import React from 'react'

const Search = ({search,setsearch}) => {

    const handlesearch = e =>{
        setsearch(e.target.value)
    }

  return (
    <div className='search'>
        <input 
        value={search}
         type="text"
         className='searchinput'
         onChange={handlesearch}
          placeholder='Search Note Here ....' 
          />
    </div>
  )
}

export default Search