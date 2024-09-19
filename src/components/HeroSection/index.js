import { useState, useRef } from "react";
import Computer from '../../videos/Computer.mp4'
import Mobile from '../../videos/Mobile.mp4'
import './hero.css';
const HeroSection = () => {
    const [showButton, setShowButton] = useState(false);
    const videoRef = useRef(null); // Ref to access the video element

    // Function to show the button 2 seconds before the video ends
    const handleTimeUpdate = () => {
      const video = videoRef.current;
      if (video) {
        const timeRemaining = video.duration - video.currentTime;
        if (timeRemaining <= 2) { // Show the button 2 seconds before the end
          setShowButton(true);
        }
      }
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
                        className="absolute top-0 left-0 w-full h-[90%] object-cover"
                        autoPlay
                        muted
                        ref={videoRef}
                        playsInline
                        onTimeUpdate={handleTimeUpdate} // Trigger this event during video playback
                        onEnded={() => setShowButton(true)} // Fallback if video reaches the end
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
                        ref={videoRef}
                        playsInline
                        onTimeUpdate={handleTimeUpdate} // Trigger this event during video playback
                        onEnded={() => setShowButton(true)} // Fallback if video reaches the end
                    >
                        <source src={Computer}  type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Button displayed after the video ends */}
                {showButton && (
                <div className="absolute top-[150px] left-0 right-0 flex justify-center items-start mt-4">
                    <button
                    onClick={handleButtonClick}
                    className="homepagebtn bg-purple-600 text-black font-semibold rounded-lg"
                    >
                    Get Started
                    </button>
                </div>
                )}

            </div>
        </div>
    );
};

export default HeroSection;
