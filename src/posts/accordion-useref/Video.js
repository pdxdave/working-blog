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

    // @media (max-width: 768px) {
    //     max-width: 500px;
    // }
    // @media (max-width: 658px) {
    //     max-width: 400px;
    // }
    // @media (max-width: 562px) {
    //     max-width: 300px;
    // }
    // @media (max-width: 460px) {
    //     max-width: 270px;
    // }
`