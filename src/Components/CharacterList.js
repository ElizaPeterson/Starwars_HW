import React from 'react'
import "./CharacterList.css"

const CharacterList = ({characters}) => {

  const characterList = characters.map((character, index) => {
    return <li key={index}> {character.name}</li>
  })

  return (
    <div className='character-list'>
      <p className='char-title'> Characters: </p>
      <p className='char-list'>{characterList}</p>
    </div>
  )
}

export default CharacterList
