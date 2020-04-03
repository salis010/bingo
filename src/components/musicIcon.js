import React from 'react'

export const MusicIcon = (props) => {

    const source = props.musicOn ? '../images/music-on.png' : '../images/music-off.png'

    return <img 
                className='music-icon' 
                src={source} 
                onClick={props.musicOnOff}                 
            />
}