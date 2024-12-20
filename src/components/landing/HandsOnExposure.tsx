import yosemiteValleyImage from '../../assets/landing/yosemite-valley.png';  

const HandsOnExposure = () => {  
    return (   
        <div className="bg-[#0E2F3F] w-full flex p-10 relative h-[160%]">  
            <div className="flex w-[50vw] flex-col my-auto gap-4 px-10 text-white">  
                <h4 className="text-[20px] font-inter font-bold text-[#7CD2FC]">Bag your dream internship</h4>  
                <h3 className="text-[40px] font-bold tracking-wide leading-[1.1]">BUILD PROFILE</h3>  
                <p className="text-[22px] font-montserrat font-bold leading-[1.5] max-w-3xl">
                    FAQs, CV making guides and tips to get started, from <br />
                    seniors at the top of their fields.
                </p>  
                <div className="flex gap-x-4 my-1"> {/* Adjusted gap between buttons using gap-x */}  
                    <button className="border-white border-2 bg-transparent text-white py-1 px-3 rounded-full">Core</button>  
                    <button className="border-white border-2 bg-transparent text-white py-1 px-3 rounded-full">SDE</button>  
                    <button className="border-white border-2 bg-transparent text-white py-1 px-3 rounded-full">Consult</button>  
                    <button className="border-white border-2 bg-transparent text-white py-1 px-3 rounded-full">Analytics</button>  
                    <button className="border-white border-2 bg-transparent text-white py-1 px-3 rounded-full">Quant</button>
                </div>  
                <div>
                    <div>
                    <button className="bg-transparent text-[#0E2F3F] py-1 px-3">Had to create to give space</button> 
                    </div>
                </div>
                <div>

                </div>
            </div>  

            <img  
                className="w-[40vw] h-[50vh] object-cover absolute bottom-0 right-0"  
                src={yosemiteValleyImage}  
                alt="Yosemite Valley"   
            />  
        </div>  
    );  
}  

export default HandsOnExposure;
