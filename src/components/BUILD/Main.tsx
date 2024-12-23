import React from "react";  
import profileData from "../../assets/profiles.json";

const TimelinePage = ({ profileName }: { profileName: string | undefined }) => {  
    const profile = profileData[profileName as keyof typeof profileData];
    const curveHeight = 300;  
    const middle = 150;  
    const amplitude = 25;
    const startX = -Math.PI; 
    const endX = 6.5 * Math.PI; 

    const downwardArrowPositions = [-Math.PI / 2, (3 * Math.PI) / 2, (7 * Math.PI) / 2, (11 * Math.PI) / 2];  
    const upwardArrowPositions = [Math.PI / 2, (5 * Math.PI) / 2, (9 * Math.PI) / 2];  

    const mapToPercentage = (x: number): number => ((x - startX) / (endX - startX)) * 100;

    const calculateY = (x: number): number => middle - amplitude * Math.sin(x);
     

 
    const arrows = [  
        ...downwardArrowPositions.map((x, index) => ({  
            positionX: `${mapToPercentage(x)}%`,  
            positionY: calculateY(x)+70,  
            direction: "down" as "down",  
            label: profile?.downwardLabels?.[index] || `Down ${index + 1}`,  
        })).filter(arrow => arrow.label.trim() !== ""), // Filter out blank labels
        ...upwardArrowPositions.map((x, index) => ({  
            positionX: `${mapToPercentage(x)}%`,  
            positionY: amplitude+5, // Starting from the top of the sine curve  
            direction: "up" as "up",  
            label: profile?.upwardLabels?.[index] || `Up ${index + 1}`,  
        })).filter(arrow => arrow.label.trim() !== ""), // Filter out blank labels  
    ];  
    
    
      
      

    return (  
        <div className="w-full min-h-screen bg-[#E4E4E4] flex flex-col items-center">  
            <div className="flex-grow">  
               
                <div className="w-full py-2 flex flex-col items-center relative">  
                    <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 mt-0" style={{ fontFamily: "Times New Roman, serif", color: "#002F40", fontWeight: 500 }}>Timeline</h1>  

                   
                    <div className="relative w-full min-h-[400px]">  
                         
                        <svg  
                            className="absolute w-full h-full"  
                            xmlns="http://www.w3.org/2000/svg"  
                            viewBox={`0 0 1000 ${curveHeight}`}  
                            preserveAspectRatio="none"  
                        >  
                            <path  
                                d={`M0,${middle} ${Array.from({ length: 1000 }, (_, i) => {
                                  const x = startX + (i * (endX - startX)) / 1000;
                                  const y = middle - amplitude * Math.sin(x) ;
                                  return `L${(i / 1000) * 1000},${y}`;
                              }).join(" ")}`}
                                
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
            src={profile?.videoLinks?.[0] || ""}
        />
    </div>
    <div className="w-1/2 flex flex-col items-center justify-center p-8 bg-[#F5F5F5]">
        <h1 className="text-5xl font-bold text-center text-black mb-4" style={{ fontFamily: "Times New Roman, serif" }}>FAQs</h1>
        <p className="text-2xl font-bold text-center text-black mb-2">All your questions answered!</p>
        <p className="text-xl text-center text-black mb-4">Use the timestamps below to navigate to the questions of your choice:</p>
        <div className="flex space-x-4">
        {profile?.question?.map((question, index) => (
                <React.Fragment key={index}>
                  <a
                    href={`#${question.toLowerCase()}`}
                    //onMouseEnter={(e) => handleMouseEnter(e, index)}
                   // onMouseLeave={handleMouseLeave}
                    className="text-black text-xl font-bold underline"
                  >
                    {question}
                  </a>
                  {index < profile.question.length - 1 && <span className="text-black text-xl">|</span>}
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
            src={profile?.videoLinks?.[1] || ""}
        />
    </div>
</div>
 

                 
<div className="w-full bg-[#E4E4E4] p-8">
{profile?.guide?.html && (
        <div
            dangerouslySetInnerHTML={{ __html: profile.guide.html }}
        />
    )}
</div>
            </div>  
        </div>  
    );  
};  


interface ArrowProps {
  x: string; // X position as a percentage string
  y: number; // Y position as a number
  direction: "up" | "down"; // Direction can be either "up" or "down"
  label: string; // Label for the arrow
}

const Arrow: React.FC<ArrowProps> = ({ x, y, direction, label }) => {
    const arrowLength = 40;
  
    // Split label into heading and body
    const splitLabel = label.split(/(?<=\.)\s/); // Split at the first sentence ending
    const heading = splitLabel[0]; // First part is the heading
    const body = splitLabel.slice(1).join(" "); // Remaining text is the body
  
    // Function to format body text with breaks only on "!!"
    const formatBodyText = (text: string) =>
      text.split("!!").map((line, index) => (
        <React.Fragment key={index}>
          <span style={{ whiteSpace: "nowrap" }}>{line.trim()}</span>
          {index < text.split("!!").length - 1 && <br />}
        </React.Fragment>
      ));
  
    return (
      <div
        className="absolute flex flex-col items-center"
        style={{
          left: x,
          top: `${y}px`,
          transform: "translate(-50%, 0)",
        }}
      >
        {direction === "down" ? (
          <>
            <div
              className="w-[2px] bg-[#002F40]"
              style={{ height: `${arrowLength}px` }}
            ></div>
            <div className="w-3 h-3 bg-[#002F40] rounded-full"></div>
            <div
              className="text-sm mt-2 text-[#000000] font-semibold text-center max-w-xs"
              style={{ textAlign: "center" }}
            >
              <strong>{heading}</strong>
              <p>{formatBodyText(body)}</p>
            </div>
          </>
        ) : (
          <>
            <div
              className="text-sm mb-2 text-[#000000] font-semibold text-center max-w-xs"
              style={{ textAlign: "center" }}
            >
              <strong>{heading}</strong>
              <p>{formatBodyText(body)}</p>
            </div>
            <div className="w-3 h-3 bg-[#002F40] rounded-full"></div>
            <div
              className="w-[2px] bg-[#002F40]"
              style={{ height: `${arrowLength}px` }}
            ></div>
          </>
        )}
      </div>
    );
  };
  
  

export default TimelinePage;
