import React from 'react'
import CharacterItem from './CharacterItem'
import '../App.css'
const Characters = ({items,isLoading}) => {
    return (
        isLoading?(<h1>Loading..</h1>):(
            <section className='cards center'>
                {items.map((item)=>(
                    <CharacterItem key={item.char_id} item={item}/>
                    
                ))}
            </section>
            )
    )
}

export default Characters
