import DataTestimonials from '../lib/data-testimonials';

import CardService from "../components/CardService";
import SellingPointsContent from "../components/SellingPointsContent";
import CardTestimonials from "../components/CardTestimonials";
import Hero from "../components/Hero";

import Layout from "./Layout";


import panahKanan from "../assets/icon/arrowright.svg";
import varta from "../assets/icon/varta.svg";
import lenovo from "../assets/icon/lenovo.svg";
import bbs from "../assets/icon/bbs.svg";
import weller from "../assets/icon/weller.svg";
import british_airways from "../assets/icon/british_airways.svg";
import Lufthansa from "../assets/icon/lufthansa.svg";

import BlockPics from "../assets/icon/block-pic.svg";









function Partners() {
    return (
        <>
            {/* Section Partner */}
            <section className="sm:mt-28 mt-20">
                <div className="container mx-auto sm:px-4 mb-20">
                    <div className="grid grid-cols-3 gap-4 md:flex md:flex-wrap md:gap-8 md:justify-center">
                        <img src={varta} alt="varta" className="w-40" />
                        <img src={lenovo} alt="lenovo" className="w-40" />
                        <img src={bbs} alt="bbs" className="w-40" />
                        <img src={weller} alt="weller" className="w-40" />
                        <img src={british_airways} alt="british_airways" className="w-40" />
                        <img src={Lufthansa} alt="Lufthansa" className="w-40" />

                    </div>
                </div>
            </section>
        </>

    )


};

function SellingPoints() {
    return (
        <>
            {/* Section Selling Point */}
            <section>
                <div className="container mx-auto sm:px-4 py-5">


                    <SellingPointsContent imageSrc={BlockPics} title="Incredible">
                        Consequatur quidem deserunt qui fugit cumque ut esse
                        est dignissimos. Itaque quia et veritatis. Qui voluptatem
                        dolor quia exercitationem sed similique. Incidunt quae
                        suscipit nihil deleniti. Possimus praesentium sunt aut
                        tempora ut alias.
                    </SellingPointsContent>

                    <SellingPointsContent imageSrc={BlockPics} title="Fantastic" reverse="flex-row-reverse">
                        Itaque cupiditate soluta necessitatibus. Quis ut veritatis
                        sed exercitationem autem est. Pariatur dolorum officiis
                        fuga officia labore libero. Magni tenetur delectus. Et
                        consequatur accusantium quisquam reiciendis aut.
                    </SellingPointsContent>

                    <SellingPointsContent imageSrc={BlockPics} title="Intelligent">
                        Neque aperiam labore reiciendis fugit error mollitia.
                        Repellat non voluptatem expedita quos quia. Quae
                        architecto quia perferendis dicta facilis. Impedit aut sit.
                        Voluptatem praesentium rem officiis.
                    </SellingPointsContent>


                </div>
            </section>
        </>

    )
};

function Service() {
    return (
        <>
            <section className="min-h-[44rem] bg-[#F3F4F6] pt-10 sm:pt-32">
                <div className="flex flex-col items-center p-8 sm:mx-auto">
                    <h3 className="font-semibold text-5xl text-center">Our service features</h3>
                    <p className="text-center sm:w-[27rem] mt-2">
                        Aliquid officiis cumque sunt sint. Et quo culpa. Enim
                        sed natus molestiae fugiat cum consequatur quia
                        sunt.
                    </p>
                </div>

                <div className="flex flex-wrap sm:flex-nowrap gap-10 p-14 justify-center">
                    <CardService cardTitle="Incredible">
                        Adipisci tempora pariatur modi
                        recusandae. Omnis neque
                        dolorum. Natus facere
                        voluptatem.
                    </CardService>

                    <CardService cardTitle="Generic">
                        Adipisci tempora pariatur modi
                        recusandae. Omnis neque
                        dolorum. Natus facere
                        voluptatem.
                    </CardService>

                    <CardService cardTitle="Awesome">
                        Adipisci tempora pariatur modi
                        recusandae. Omnis neque
                        dolorum. Natus facere
                        voluptatem.
                    </CardService>

                    <CardService cardTitle="Refined">
                        Adipisci tempora pariatur modi
                        recusandae. Omnis neque
                        dolorum. Natus facere
                        voluptatem.
                    </CardService>




                </div>
            </section>
        </>
    )
};

function Testimonials() {
    return (
        <>
            <section className="min-h-[44rem] pt-10 sm:pt-32">
                <div className="flex flex-col items-center p-8 sm:mx-auto">
                    <h3 className="font-semibold text-5xl text-center">Testimonials</h3>
                    <p className="text-center sm:w-[27rem] mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Quisquam, repellendus numquam.
                    </p>
                </div>


                <div className="flex flex-wrap  gap-10 p-16 justify-center sm:justify-start">
                    {
                        DataTestimonials.testimonials.map((item) => {
                            return (
                                <CardTestimonials
                                    name={item.name}
                                    position={item.position}
                                    imgProfile={item.image}
                                    key={item.id}
                                >

                                    {item.comment}
                                </CardTestimonials>
                            )
                        })
                    }

                </div>

            </section>
        </>
    )
}

function FreeTrials() {
    return (
        <>
            <div className="container">
                <div className=" my-8 mx-8 h-[26rem] px-1 py-28 card bg-success rounded-lg place-items-center gap-12">
                    <div className="flex flex-col items-center justify-center mx-auto text-white">
                        <h3 className=" text-3xl font-bold sm:font-semibold  sm:text-5xl text-center">Start your free trial</h3>
                        <p className="text-center sm:w-[27rem] mt-2">
                            Trial period - 14 days, no credit card required
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center mx-auto">
                        <div className="join">
                            <input className="input input-bordered join-item sm:w-72" placeholder="Your email address" />
                            <button className="btn join-item bg-[#047857] border-none text-white">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function Home() {
    return (
        <Layout>

            <section className="container z-0">
                <Hero >
                    <h1 className="sm:text-6xl font-semibold pr-12 text-3xl">
                        Landing page for your online service
                    </h1>
                    <p className="py-6 text-lg pr-12">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae.</p>
                    <button className="btn btn-success text-base text-white ">
                        Learn More
                        <img src={panahKanan} alt="" />
                    </button>
                </Hero>
                <Partners />
                <SellingPoints />

            </section>

            <Service />
            <Testimonials />
            <FreeTrials />

        </Layout>
    )
};

export default Home;