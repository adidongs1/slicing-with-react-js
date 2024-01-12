
import ImgHero from "../assets/img/hero-illustration.png";


function Hero({ children }) {
    return (
        <>
            <div className="hero min-h-80">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={ImgHero} className="max-h-lg w-full" />
                    <div className="w-full">
                        {children}
                    </div>
                </div>
            </div>
        </>

    )
};

export default Hero