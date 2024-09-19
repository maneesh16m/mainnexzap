import { useState } from "react";
import Computer from '../../videos/Computer.mp4'
import Mobile from '../../videos/Mobile.mp4'

const HeroSection = () => {
    const [showButton, setShowButton] = useState(false);

    const handleVideoEnd = () => {
        setShowButton(true); // Display the button when the video ends
    };

    const handleButtonClick = () => {
        window.location.href = "#products"; // Navigate to the products page
    };

    return (
        <div id="home">
            <div className="relative w-screen h-screen lg:h-screen overflow-hidden">
                {/* Video for small and medium screens */}
                <div className="sm:block md:block lg:hidden">
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        playsInline
                        onEnded={handleVideoEnd}
                    >
                        <source src={Mobile} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Video for large screens */}
                <div className="hidden lg:block">
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        playsInline
                        onEnded={handleVideoEnd}
                    >
                        <source src={Computer}  type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Button displayed after the video ends */}
                {showButton && (
                    <div className="absolute inset-0 flex justify-center items-center">
                        <button
                            onClick={handleButtonClick}
                            className="bg-[#3a165a] text-white px-4 py-4 rounded-md text-lg"
                        >
                            Begin Our Journey
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HeroSection;




// import React from 'react'
// import { HeroContainer } from './HeroStyle'
// import HomepageVideo from '../../images/HomepageVideo.mp4'
// import './hero.css';
// const HeroSection = () => {
//     return (
//         <div id="home">
//             <HeroContainer>
//             <div className="relative w-screen  h-[400px] lg:h-screen overflow-hidden">
//             <video
//                 className="absolute top-0 left-0 w-full h-full object-contain lg:object-cover"
//                 autoPlay
//                 muted
//                 playsInline
//             >
//                 <source src={HomepageVideo} type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//             </div>




//             </HeroContainer>
//         </div>
//     )
// }

// export default HeroSection