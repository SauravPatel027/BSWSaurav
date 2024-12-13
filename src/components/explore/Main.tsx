import React from "react";  

const TimelinePage = () => {  
    const curveHeight = 300;  
    const middle = 150;  
    const amplitude = 50;
    const startX = -Math.PI; 
    const endX = 6 * Math.PI; 

    const downwardArrowPositions = [-Math.PI / 2, (3 * Math.PI) / 2, (7 * Math.PI) / 2, (11 * Math.PI) / 2];  
    const upwardArrowPositions = [Math.PI / 2, (5 * Math.PI) / 2, (9 * Math.PI) / 2];  

    const mapToPercentage = (x) => ((x - startX) / (endX - startX)) * 100;  

  
    const calculateY = (x) => middle - amplitude * Math.sin(x);  

 
    const arrows = [  
        ...downwardArrowPositions.map((x, index) => ({  
            positionX: ${mapToPercentage(x)}%,  
            positionY: calculateY(x),  
            direction: "down",  
            label: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th"][index],  
        })),  
        ...upwardArrowPositions.map((x, index) => ({  
            positionX: ${mapToPercentage(x)}%,  
            positionY: amplitude - 32, // Starting from the top of the sine curve  
            direction: "up",  
            label: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th"][index + downwardArrowPositions.length],  
        })),  
    ];  

    return (  
        <div className="w-full min-h-screen bg-[#E4E4E4] flex flex-col items-center">  
            <div className="flex-grow">  
               
                <div className="w-full py-2 flex flex-col items-center relative">  
                    <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 mt-0" style={{ fontFamily: "Times New Roman, serif", color: "#002F40", fontWeight: 500 }}>Timeline</h1>  

                   
                    <div className="relative w-full h-[300px]">  
                         
                        <svg  
                            className="absolute w-full h-full"  
                            xmlns="http://www.w3.org/2000/svg"  
                            viewBox={0 0 1000 ${curveHeight}}  
                            preserveAspectRatio="none"  
                        >  
                            <path  
                                d={`M0,${middle}   
                                    ${Array.from({ length: 1000 }, (_, i) => {  
                                        const x = startX + (i * (endX - startX)) / 1000;  
                                        const y = middle - amplitude * Math.sin(x);  
                                        return L${(i / 1000) * 1000},${y};  
                                    }).join(" ")}  
                                `}  
                                stroke="#002F40"  
                                strokeWidth="24"  
                                fill="none"  
                            />  
                        </svg>  

                      
                        {arrows.map((arrow, index) => (  
                            <Arrow  
                                key={index}  
                                x={arrow.positionX}  
                                y={arrow.positionY}  
                                direction={arrow.direction}  
                                label={arrow.label}  
                            />  
                        ))}  
                    </div>  
                </div>  

                 
                <div className="flex w-full bg-[#F5F5F5]">  
                   
                    <div className="w-1/2 bg-[#002F40] p-8 flex items-center justify-center">  
                        <video  
                            className="w-full h-auto rounded-3xl"  
                            controls  
                            src="path_to_your_video.mp4"  
                        />  
                    </div>  

                    
                    <div className="w-1/2 flex flex-col items-center justify-center p-8 bg-[#F5F5F5]">  
                        <h1 className="text-5xl font-bold text-center text-black mb-4" style={{ fontFamily: "Times New Roman, serif" }}>FAQs</h1>  
                        <p className="text-2xl font-bold text-center text-black mb-2">All your questions answered!</p>  
                        <p className="text-xl text-center text-black mb-4">Use the timestamps below to navigate to the questions of your choice:</p>  
                        <div className="flex space-x-4">  
                            {["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"].map((question, index) => (  
                                <React.Fragment key={index}>  
                                    <a href={#${question.toLowerCase()}} className="text-black text-xl">{question}</a>  
                                    {index < 5 && <span className="text-black text-xl">|</span>}  
                                </React.Fragment>  
                            ))}  
                        </div>  
                    </div>  
                </div>  

                
                <div className="flex w-full bg-[#F5F5F5]">  
                     
                    <div className="w-1/2 flex flex-col items-center justify-center p-8">  
                        <h1 className="text-5xl font-bold text-center text-black mb-4" style={{ fontFamily: "Times New Roman, serif" }}>CV Making</h1>  
                        <p className="text-xl text-center text-black mb-4">Learn how to make the perfect CV from our established experts to maximise your shortlists.</p>  
                    </div>  
                    <div className="w-1/2 bg-[#002F40] p-8 flex items-center justify-center">  
                        <video  
                            className="w-full h-auto rounded-3xl"  
                            controls  
                            src="path_to_your_video.mp4"  
                        />  
                    </div>  
                </div>  

                 
                <div className="w-full bg-[#E4E4E4] p-8">  
                    <h1 className="text-5xl font-bold text-center text-black mb-8" style={{ fontFamily: "Times New Roman, serif", textDecoration: "underline" }}>The complete guide for SDE preparation</h1>  
                    <p className="text-lg text-black mb-8">  
                        <strong>The Process:</strong> Brush up your probability theory and start solving problems on Brainstellar/Puzzledquant and then move on to the books. Give plenty of time and effort before you look at the hint/solution. Intuition builds over time. You’ll be able to solve more and more problems on your own once you get the hang of it. Give Codeforces contests regularly. Remember, rating doesn’t matter much. Company-specific prep can be done towards the end of the summer (mental math, market making prep etc). Another important aspect which people miss out- HR Round is important. Do some mock interviews with your friends and seniors so you don’t get flustered during the actual interview. Look at some HR questions and prepare your answers well.  
                    </p>  
                    <p className="text-lg text-black mb-8">  
                        <strong>Probability Theory:</strong> MTLI06 is helpful. You can also refer to Introduction to Probability Models by Sheldon Ross. Topics- Conditional probability, Bayes Theorem etc (JEE Stuff). Random Variables, PDF, CDF, Expected Value, Variance. Some common distributions (discrete and continuous both), Central Limit Theorem.  
                    </p>  
                    <p className="text-lg text-black mb-8">  
                        <strong>Puzzles, Probability questions:</strong> Brainstellar website, Heard on the Street, A Practical Guide to Quantitative Finance Interviews by Xinfeng Zhao, 50 Challenging Problems in Probability. These are the 4 standard, well-known resources (not all chapters are relevant, only probability and brainteasers). I recommend using PuzzledQuant, it helped me keep track and has a good collection of problems (brainstellar is a subset of PuzzledQuant).  
                    </p>  
                    <p className="text-lg text-black mb-8">  
                        <strong>CP:</strong> Competitive Programmer’s Handbook a go-to guide for some new algorithm you found in an editorial, CP-Algorithms to learn about any new algorithm and its implementation.  
                    </p>  
                    <p className="text-lg text-black mb-8">  
                        <strong>C++ Concepts (more important for Quant Developer roles):</strong> Learn C++.  
                    </p>  
                    <p className="text-lg text-black mb-8">  
                        <strong>Mental Math:</strong> Arithmetic Game, Games | PuzzledQuant.  
                    </p>  
                    <p className="text-lg text-black mb-8">  
                        <strong>ML (optional):</strong> If interested, you can refer to the following sections from Prof. Parag’s course CO1774: Machine Learning  
                    </p>  
                    <ul className="list-disc list-inside text-lg text-black mb-8">  
                        <li>Supervised Learning- Linear Regression, Gradient Descent, Stochastic Gradient Descent</li>  
                        <li>Linear Regression - Alternate interpretation (probabilistic), Logistic Regression, GLMs</li>  
                        <li>Decision Trees, Random Forests</li>  
                    </ul>  
                    <p className="text-lg text-black">  
                        Other resources- Aniruddha-Deb/quant-prep, Quant Interview/Test Prep, Internship Season | Chinmay Mittal.  
                    </p>  
                </div>  
            </div>  
        </div>  
    );  
};  


const Arrow = ({ x, y, direction, label }) => {  
    const arrowLength = 40;  

    return (  
        <div  
            className="absolute flex flex-col items-center"  
            style={{  
                left: x,  
                top: ${y}px, 
                transform: "translate(-50%, 0)",  
            }}  
        >  
            {direction === "down" ? (  
                <>  
                    <div className="w-[2px] bg-[#002F40]" style={{ height: ${arrowLength}px }}></div>  
                    <div className="w-3 h-3 bg-[#002F40] rounded-full"></div>  
                    <span className="text-sm mt-2 text-[#002F40] font-semibold">{label}</span>  
                </>  
            ) : (  
                <>  
                    <span className="text-sm mb-2 text-[#002F40] font-semibold">{label}</span>  
                    <div className="w-3 h-3 bg-[#002F40] rounded-full"></div>  
                    <div className="w-[2px] bg-[#002F40]" style={{ height: ${arrowLength}px }}></div>  
                </>  
            )}  
        </div>  
    );  
};  

export default TimelinePage;
