import React, { useState } from 'react'
import {BsPlusLg} from 'react-icons/bs'

const Addnot = ({addnewdata}) => {
  
  const [memo, setmemo] = useState('')

  const characterlimit = 200
  
  const handlechange = e =>{

    if (characterlimit - e.target.value.length>=0) {
      setmemo(e.target.value)
    }
    
  }

const Submit = e =>{
  e.preventDefault()
  if (memo && memo.trim().length>0) {
    addnewdata(memo)
  setmemo('') 
  }
  

}

  return (
    <div className='newnot'>
      <textarea
        onChange={ handlechange }
        value={memo}
        placeholder='Add New Note'
        cols="30"
        rows="10" />

      <div className="notes_footer">
        <p> {characterlimit - memo.length} remaining </p>
        <button
        onClick={Submit}
          className='btn'>
  <BsPlusLg/>
        </button>
      </div>
    </div>
  )
}

export default Addnot