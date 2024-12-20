import Navbar from "../components/Navbar";
import Main from "../components/BUILD/Main";
import Hero from "../components/BUILD/Hero";
import { useParams } from "react-router-dom";

export default function BuildPage() {
    const { profileName } = useParams();
    
    return (
        <div>
            <Navbar />
            <Hero profileName={profileName} />
            <Main profileName={profileName} />
        </div>
    );
}