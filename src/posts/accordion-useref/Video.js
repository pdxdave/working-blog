import React from 'react'
import styled from 'styled-components'
import video from './blog2.mp4'

export const RegVideo = () => {
    return (
    <RegVideoWrapper>
        <video controls autoPlay muted loop>
            <source src={video} type="video/mp4" />
        </video>
    </RegVideoWrapper>
    )
}

const RegVideoWrapper = styled.div `
    // width: 90vw;
    max-width: 500px;
    height: 30vh;
    position: relative;
    margin: 0 auto;
    video {
        postion: absolute;
        top: 0;
        left: 0;
        width: 100%;
        object-fit: cover;
    }

    @media (min-height: 720px){
        margin: 0 auto 9rem;
    }
    @media (min-width: 1280px){
        margin: 0 auto 6rem;
    }
    @media (min-width: 1600px) {
        margin: 0 auto;
    }

`