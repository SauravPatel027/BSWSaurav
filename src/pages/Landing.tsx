import Navbar from "../components/Navbar";
import Hero from "../components/landing/Hero";
import Explore from "../components/landing/Explore";
import { useEffect } from "react";
import BuildProfile from "../components/landing/BuildProfile";
import HandsOnExposure from "../components/landing/HandsOnExposure";
import Prepare from "../components/landing/Prepare";

export default function Landing() {
    useEffect(() => {
        // Scroll to the element with ID specified in the hash
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);
    
    return (
        <div>
            <Navbar />
            <Hero />
            <Explore />
            
            <HandsOnExposure />
            <Prepare />
            <BuildProfile />
        </div>
    );
}
