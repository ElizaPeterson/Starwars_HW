import React, { useEffect, useState } from 'react'
import FilmDetails from '../Components/FilmDetails'
import FilmsList from '../Components/FilmsList'
import "./StarwarsFilmContainer.css"

const StarwarsFilmContainer = () => {

  const [films, setFilms] = useState([])
  const [selectedFilm, setSelectedFilm] = useState(null)
  const [characters, setCharacters] = useState([])

  useEffect( () => {
    fetch( 'https://swapi.dev/api/films/' )
        .then( res => res.json() )
        .then( filmData => setFilms( filmData.results ) )
}, [] )

  const onFilmClick = (film) => {
    const characterPromises = film.characters.map((character) => {
      return fetch(character)
      .then(res => res.json())
    })
    Promise.all(characterPromises)
    .then((characterData) => {
      setCharacters(characterData)
      setSelectedFilm(film)
    })
  }

  return (
    <div className='film-container'>
      <img className="logo" src="http://imageshack.com/a/img922/3783/oyvsRd.png" height="250"/>
      <FilmsList films={films} onFilmClick={onFilmClick}/>
      <div className='film-details-outer'>
        {selectedFilm ? <FilmDetails film={selectedFilm} characters={characters}/> : null }
      </div>
    </div>
  )
}

export default StarwarsFilmContainer
