import React from 'react'
import { HeroContainer } from './HeroStyle'
import HomepageVideo from '../../images/HomepageVideo.mp4'
import './hero.css';
const HeroSection = () => {
    return (
        <div id="home">
            <HeroContainer>
                <div className="relative w-screen h-screen overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                    autoPlay
                    muted
                    playsInline
                >
                    <source src={HomepageVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </div>
            </HeroContainer>
        </div>
    )
}

export default HeroSection