import { useState } from "react";
import { Link } from "react-router-dom";
import profileData from "../../assets/profiles.json";

export default function Explore() {
    let listItems = Object.keys(profileData);
    const [currentImg, setCurrentImg] = useState<number>(Math.floor(Math.random()*6));

    return (
        <div className="w-full h-auto overflow-hidden pt-[2vh] pb-[5vh]" id="explore">
            <div className="w-full px-4  md:px-16 flex-col lg:flex-row flex justify-evenly items-center h-full ">
                <div
                    id="carousel-box"
                    className="flex flex-col justify-center items-center gap-4"
                >
                    <div
                        id="carousel-window"
                        className="flex gap-1 md:gap-6 justify-center items-center"
                    >
                        <button
                            className="p-2 md:relative absolute left-0  md:invert-0 invert bg-black/10 md:bg-transparent"
                            onClick={() => {
                                setCurrentImg(currentImg - 1);
                            }}
                        >
                            <LeftButton />
                        </button>
                        <div
                            id="carousel"
                            className="md:w-[500px] w-screen h-[200px] md:h-[250px] bg-black overflow-hidden object-cover"
                        >
                            <Link to={`/explore/${listItems[currentImg % listItems.length]}`} onClick={() => window.scrollTo(0, 0)}>
                                <img
                                    src={profileData[listItems[currentImg % listItems.length] as keyof typeof profileData].cover_image}
                                    alt="Image"
                                    className="w-full object-contain h-full object-center"
                                />
                            </Link>
                            ;
                        </div>
                        <button
                            className="p-2 md:relative absolute right-0 md:invert-0 invert bg-black/10 md:bg-transparent"
                            onClick={() => {
                                setCurrentImg(currentImg + 1);
                            }}
                        >
                            <RightButton />
                        </button>
                    </div>
                    <div
                        id="carousel-items"
                        className="flex w-full md:justify-evenly justify-center items-center flex-wrap md:gap-0 gap-4"
                    >
                        {listItems.map((item, index) => {
                            return (
                                <span
                                    onClick={() => {
                                        setCurrentImg(index);
                                    }}
                                    key={index}
                                    className="nav-item-home cursor-pointer relative overflow-x-clip"
                                >
                                    <span
                                        className={`${
                                            currentImg % listItems.length === index
                                                ? "font-bold"
                                                : ""
                                        }`}
                                    >
                                        {profileData[item as keyof typeof profileData].name}
                                    </span>
                                    <span className="w-full transition-all duration-250 left-[-100%] absolute h-[2px]  bottom-[-3px] bg-black"></span>
                                </span>
                            );
                        })}
                    </div>
                </div>

                <div className="w-full bg-black h-1 my-10 mt-5 md:hidden"></div>
                <div className=" flex flex-col gap-[2px] text-center justify-center items-start">
                    <h1 className="font-bold text-3xl">Explore {profileData[listItems[currentImg % listItems.length] as keyof typeof profileData].name}</h1>
                    <p className="md:max-w-[40ch] text-left">
                        Explore different streams, verified statistics, exciting
                        opportunities and much more
                    </p>
                    <div className="h-2"></div>
                    <button className="border-solid border-[2px] border-[#133748] py-[4px] px-2 hover:bg-[#133748] hover:text-white select-none">
                        <Link to={`/explore/${listItems[currentImg % listItems.length]}`} onClick={() => window.scrollTo(0, 0)}>
                            Read More
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

function LeftButton() {
    return (
        <svg
            width="18"
            height="43"
            viewBox="0 0 18 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <line
                x1="0.713297"
                y1="23.5414"
                x2="16.6374"
                y2="0.799526"
                stroke="black"
                strokeWidth="1"
            />
            <line
                x1="1.27053"
                y1="23.5201"
                x2="16.9323"
                y2="42.5992"
                stroke="black"
                strokeWidth="1"
            />
        </svg>
    );
}
function RightButton() {
    return (
        <svg
            width="18"
            height="43"
            viewBox="0 0 18 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <line
                x1="17.2105"
                y1="19.2794"
                x2="1.28647"
                y2="42.0213"
                stroke="black"
                strokeWidth="1"
            />
            <line
                x1="16.6533"
                y1="19.3007"
                x2="0.991486"
                y2="0.221584"
                stroke="black"
                strokeWidth="1"
            />
        </svg>
    );
}
