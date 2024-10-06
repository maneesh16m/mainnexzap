import { useState, useRef, useEffect } from "react";
import Computer from '../../videos/Computer.mp4'
import Mobile from '../../videos/Mobile.mp4'
import './hero.css';

const HeroSection = () => {
    const [showButton, setShowButton] = useState(false);
    const [showText, setShowText] = useState(false);
    const desktopVideoRef = useRef(null);
    const mobileVideoRef = useRef(null);

    const handleDesktopTimeUpdate = () => {
        if (desktopVideoRef.current && desktopVideoRef.current.currentTime >= 3.5) { // Changed from 2 to 3.5
            setShowButton(true);
            setShowText(true);
        }
    };

    const handleMobileTimeUpdate = () => {
        if (mobileVideoRef.current && mobileVideoRef.current.currentTime >= 3.5) { // Changed from 2 to 3.5
            setShowButton(true);
            setShowText(true);
        }
    };

    const handleButtonClick = () => {
        const productsSection = document.getElementById('products');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const preventContextMenu = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        const desktopVideo = desktopVideoRef.current;
        const mobileVideo = mobileVideoRef.current;

        if (desktopVideo) {
            desktopVideo.addEventListener('contextmenu', preventContextMenu);
        }
        if (mobileVideo) {
            mobileVideo.addEventListener('contextmenu', preventContextMenu);
        }

        return () => {
            if (desktopVideo) {
                desktopVideo.removeEventListener('contextmenu', preventContextMenu);
            }
            if (mobileVideo) {
                mobileVideo.removeEventListener('contextmenu', preventContextMenu);
            }
        };
    }, []);

    return (
        <div id="home">
            <div className="relative w-screen h-screen lg:h-screen overflow-hidden">
                <div className="sm:block md:block lg:hidden">
                    <video
                        className="absolute top-0 left-0 w-full h-[90%] object-cover"
                        autoPlay
                        muted
                        ref={mobileVideoRef}
                        playsInline
                        onTimeUpdate={handleMobileTimeUpdate}
                        onEnded={() => {setShowButton(true); setShowText(true);}}
                    >
                        <source src={Mobile} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="hidden lg:block">
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        ref={desktopVideoRef}
                        playsInline
                        onTimeUpdate={handleDesktopTimeUpdate}
                        onEnded={() => {setShowButton(true); setShowText(true);}}
                    >
                        <source src={Computer} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {showText && (
                    <div className="absolute top-[100px] left-0 right-0 flex justify-center items-center">
                        <h2 className="hero-text text-3xl md:text-4xl lg:text-5xl text-center animate-cross-zoom">
                            Just a click away from elevating your business
                        </h2>
                    </div>
                )}

                {showButton && (
                    <div className="absolute top-[200px] left-0 right-0 flex justify-center items-start mt-4">
                        <button
                            onClick={handleButtonClick}
                            className="homepagebtn font-semibold rounded-lg"
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