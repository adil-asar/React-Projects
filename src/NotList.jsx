import React, { useState } from 'react'
import Note from './Note'

import Addnot from './Addnot'
import { nanoid } from 'nanoid'
import { useEffect } from 'react'


const NotList = ({ search }) => {

  const [notedata, setnotdata] = useState([
    // {
    //   id: nanoid(),
    //   text: 'hello first notes',
    //   date: '17/6/2022'
    // },
    // {
    //   id: nanoid(),
    //   text: 'hello second notes',
    //   date: '20/6/2022'
    // },
    // {
    //   id: nanoid(),
    //   text: 'hello third notes',
    //   date: '23/6/2022'
    // },
  ]);

  const addnewdata = (memo) => {

    const date = new Date()

    const newNote = {
      id: nanoid(),
      text: memo,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notedata, newNote];
    setnotdata(newNotes)
    localStorage.setItem("notes", JSON.stringify(newNotes))
  }



  const deletenote = (id) => {

    const remove = notedata.filter((del) => del.id !== id)
    setnotdata(remove)
  }
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"))
    if (savedNotes) {
      setnotdata(savedNotes);
    }
  }, []);
  return (
    <div className='notelist'>

      <Addnot addnewdata={addnewdata} />
      {
        notedata.filter((note) => note.text.toLowerCase().includes(search)).map((element, index) => {
          return <Note
            key={index}
            data={element}
            Delete={deletenote}
          />
        })
      }

    </div>
  )
}

export default NotList