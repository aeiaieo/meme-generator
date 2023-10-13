import React from 'react'

export default function Meme(){
const [meme, setMeme] = React.useState({
    topText:"",
    botText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
})
const [allMemes, setAllMemes] = React.useState([])

React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
}, [])

    function getMeme(){
        const randomNum = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNum].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return(
        <main>
            <div className='form'>
                <input 
                    placeholder="top text"
                    type="text"
                    className="form--input"
                    name='topText'
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    placeholder="bottom text"
                    type="text"
                    className="form--input"
                    name='botText'
                    value={meme.botText}
                    onChange={handleChange}
                />
                <button
                    type="text"
                    className="form--button"
                    onClick={getMeme}
                >
                    meme pls
                </button>
            </div>
            <div className = 'meme'>
                <img src={meme.randomImage} className='meme--image'/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.botText}</h2>
            </div>
        </main>
    )
}