import React from 'react'
import memesData from '../memesData.jsx'

export default function Meme(){

const [memeImage, setMemeImage] = React.useState('')

    function getMeme(){
        const memesArray = memesData.data.memes
        const randomNum = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNum].url)
    }
    return(
        <main>
            <div className='meme'>
                <input placeholder='top text'></input>
                <input placeholder='bottom text'></input>
                <button onClick={getMeme}>can i haz meme plz</button>
            </div>
            <img src={memeImage} className='meme--image'/>
        </main>
    )
}