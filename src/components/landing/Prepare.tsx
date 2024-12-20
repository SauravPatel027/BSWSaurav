import resourceImage1 from '../../assets/landing/Resource.jpg'; // Replace with the correct file name  
import resourceImage2 from '../../assets/landing/HR.jpg'; // Replace with the correct file name  
import resourceImage3 from '../../assets/landing/Interview.jpg'; // Replace with the correct file name  

const Prepare = () => {  
    return (  
        <div className="flex p-10 w-full items-center "> {/* Set min-height to 160% of viewport height */}  
            {/* Boxes Section */}  
            <div className="flex gap-10 w-full justify-between">  
                {/* Box 1 */}  
                <div className="flex flex-col items-center justify-center rounded-lg w-[18vw]">  
                    <img src={resourceImage1} alt="UPSC PREP" className="w-full h-auto object-cover" />  
                    <div className="w-full text-center font-bold mt-2 rounded-lg border border-[#0E2F3F] text-[#0E2F3F] py-2">UPSC PREP</div>  
                </div>  
                {/* Box 2 */}  
                <div className="flex flex-col items-center justify-center rounded-lg w-[18vw]">  
                    <img src={resourceImage2} alt="CAT PREP" className="w-full h-auto object-cover" />  
                    <div className="w-full text-center font-bold mt-2 rounded-lg border border-[#0E2F3F] text-[#0E2F3F] py-2">CAT PREP</div>  
                </div>  
                {/* Box 3 */}  
                <div className="flex flex-col items-center justify-center rounded-lg w-[18vw]">  
                    <img src={resourceImage3} alt="HIGHER STUDIES" className="w-full h-auto object-cover" />  
                    <div className="w-full text-center font-bold mt-2 rounded-lg border border-[#0E2F3F] text-[#0E2F3F] py-2">HIGHER STUDIES</div>  
                </div>  
            </div>  

            {/* Description Section */}  
            <div className="flex flex-col w-1/2 pl-10">  
                <h3 className="text-4xl mb-4 text-[#0C232D] font-bold">Other Post-College Opportunities</h3>  
                <p className="mb-6 leading-relaxed text-[#0C232D]" style={{ fontSize: 'calc(1rem + 15%)' }}>
                    Explore other options post-college such as preparing for competitive exams or higher studies!
                </p>   
            </div>  
        </div>  
    );  
}  

export default Prepare;
