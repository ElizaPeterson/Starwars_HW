import React from 'react'
import "./Film.css"

const Film = ({onFilmClick, film}) => {

  
  const handleClick = function(){
    console.log("clicked")
    onFilmClick(film)
  }

  return (
    <div className='film'>
      <h2 onClick={handleClick}>{film.title}</h2>
    </div>
  )
}

export default Film
