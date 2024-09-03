import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Span } from './HeroStyle'
import HeroImg from '../../images/logolap3.png'
import TypeWriterDesc from './TypeWriter';

const HeroSection = () => {
    return (
        <div id="home">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <TextLoop>
                            <Span>
                                <TypeWriterDesc/>
                            </Span>
                        </TextLoop>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={HeroImg} alt="hero-image"
                        className="transition-transform duration-1000 ease-in-out transform hover:scale-110" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection