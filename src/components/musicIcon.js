import React from 'react'

export const MusicIcon = (props) => {

    const source = props.musicOn ? '/media/images/music-on.png' : '/media/images/music-off.png'

    return <img 
                className='music-icon' 
                src={source} 
                onClick={props.musicOnOff}                 
            />
}