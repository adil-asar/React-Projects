import React from 'react'
import {AiTwotoneDelete} from 'react-icons/ai'

const Note = (props) => {
  const {data,Delete} =props

  const handledelet = () => {
Delete(data.id)
  }


  return (
    <div className='note'>

<p>
{data.text}
</p>

<div className='notes_footer'>
  <p>{data.date}</p>
  <button className='btn' onClick={handledelet}><AiTwotoneDelete/></button>
</div>

    </div>
  )
}

export default Note