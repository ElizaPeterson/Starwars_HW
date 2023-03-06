import React from 'react'
import CharacterList from './CharacterList'
import "./FilmDetails.css"

const FilmDetails = ({film, characters}) => {

  return (
    <div className='film-details'>
      <div className='film-title'>
        <h2>{film.title}</h2>
        <h3>Episode {film.episode_id}</h3>
      </div>
      <p>Director: {film.director}</p>
      <p>Release Date: {film.release_date}</p>
      <div>
          <CharacterList characters={characters}/>
      </div>
    </div>
  )
}

export default FilmDetails
