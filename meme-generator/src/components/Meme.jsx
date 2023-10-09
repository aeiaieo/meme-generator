import React from 'react'
import memesData from '../memesData.jsx'

export default function Meme(){

const [meme, setMeme] = React.useState({
    topText:" ",
    bottomText: " ",
    randomImage: "http://i.imgflip.com/1bij.jpg"
})

const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMeme(){
        const memesArray = allMemeImages.data.memes
        const randomNum = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNum].url
        setMeme(prevMeme => ({...prevMeme, randomImage: url}))
    }
    return(
        <main>
            <div className='meme'>
                <input placeholder='top text'></input>
                <input placeholder='bottom text'></input>
                <button onClick={getMeme}>can i haz meme plz</button>
            </div>
            <img src={meme.randomImage} className='meme--image'/>
        </main>
    )
}