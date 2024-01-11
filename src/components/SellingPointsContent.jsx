import panahKanan from '../assets/arrowright.svg';

function SellingPointsContent({ imageSrc, title, reverse, children }) {
    return (
        <>
            <div className={`flex flex-wrap ${reverse} `}>

                <div className="md:w-1/2 px-4 w-full py-3">
                    <img
                        className="w-full"
                        src={imageSrc}
                        alt=""
                    />
                </div>
                <div className="md:w-1/2 px-4 w-full py-3 flex flex-col justify-center items-start gap-2">
                    <h3 className="font-semibold text-4xl">{title}</h3>
                    <p className="py-3 w-[29.5rem]">
                        {children}
                    </p>
                    <button
                        href="#"
                        className="py-3 px-6 bg-success rounded-btn font-semibold text-base text-white flex items-center my-auto"
                    >
                        Get Started
                        <img src={panahKanan} alt="" />
                    </button>
                </div>

            </div>
        </>
    )
};

export default SellingPointsContent;