import React from 'react'
import {BsLightbulbFill,BsFillLightbulbOffFill} from 'react-icons/bs';
const Header = ({mode,setmode}) => {

const mode_changer = () =>{
    setmode(!mode)
}


  return (
    <div className='header'>
        <h1 className={mode ? 'logo':''}>React Note App</h1>
        <button 
        onClick={mode_changer}
        className={`mode_btn ${mode ? 'dark_btn': ''}`}>
            {
                mode ? <BsLightbulbFill/>:<BsFillLightbulbOffFill/>
            }
            </button>
    </div>
  )
}

export default Header