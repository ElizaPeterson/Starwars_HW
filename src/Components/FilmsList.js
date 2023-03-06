import React from 'react'
import Film from './Film'
import "./FilmList.css"

const FilmsList = ({films, onFilmClick}) => {

  const filmList = films.map((film, index) => {
    return(
      <Film key={index} film={film} onFilmClick={onFilmClick}/>
    )
  })

  return (
    <div className='film-list'>
      {filmList}
    </div>
  )
}

export default FilmsList
