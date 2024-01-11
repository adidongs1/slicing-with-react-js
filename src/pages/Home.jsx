import CardService from "../components/CardService";
import SellingPointsContent from "../components/SellingPointsContent";
import CardTestimonials from "../components/CardTestimonials";
import Hero from "../components/Hero";

import Layout from "./Layout";


import panahKanan from "../assets/arrowright.svg";
import varta from "../assets/varta.svg";
import lenovo from "../assets/lenovo.svg";
import bbs from "../assets/bbs.svg";
import weller from "../assets/weller.svg";
import british_airways from "../assets/british_airways.svg";





function Partners() {
    return (
        <>
            {/* Section Partner */}
            <section className="mt-28">
                <div className="container mx-auto sm:px-4 py-5 mb-20">
                    <div className="flex">
                        <div className="md:w-1/5 pr-4 pl-4 w-1/3 mb-3 md:mb-0">
                            <img className="w-40" src={varta} alt="varta" />
                        </div>
                        <div className="md:w-1/5 pr-4 pl-4 w-1/3 mb-3 md:mb-0">
                            <img className="w-40" src={lenovo} alt="lenovo" />
                        </div>
                        <div className="md:w-1/5 pr-4 pl-4 w-1/3 mb-3 md:mb-0">
                            <img className="w-40" src={bbs} alt="bbs" />
                        </div>
                        <div className="md:w-1/5 pr-4 pl-4 w-1/3 mb-3 md:mb-0">
                            <img className="w-40" src={weller} alt="weller" />
                        </div>
                        <div className="md:w-1/5 pr-4 pl-4 w-1/3 mb-3 md:mb-0">
                            <img
                                className="w-40"
                                src={british_airways}
                                alt="british_airways"
                            />
                        </div>
                        <div className="md:w-1/5 pr-4 pl-4 w-1/3 mb-3 md:mb-0">
                            <img
                                className="w-40"
                                src="./src/assets/lufthansa.svg"
                                alt="lufthansa"
                            />
                        </div>
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


                    <SellingPointsContent imageSrc="./src/assets/block-pic.svg" title="Incredible">
                        Consequatur quidem deserunt qui fugit cumque ut esse
                        est dignissimos. Itaque quia et veritatis. Qui voluptatem
                        dolor quia exercitationem sed similique. Incidunt quae
                        suscipit nihil deleniti. Possimus praesentium sunt aut
                        tempora ut alias.
                    </SellingPointsContent>

                    <SellingPointsContent imageSrc="./src/assets/block-pic.svg" title="Fantastic" reverse="flex-row-reverse">
                        Itaque cupiditate soluta necessitatibus. Quis ut veritatis
                        sed exercitationem autem est. Pariatur dolorum officiis
                        fuga officia labore libero. Magni tenetur delectus. Et
                        consequatur accusantium quisquam reiciendis aut.
                    </SellingPointsContent>

                    <SellingPointsContent imageSrc="./src/assets/block-pic.svg" title="Intelligent">
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
            <section className="min-h-[44rem] bg-[#F3F4F6] pt-32">
                <div className="flex flex-col items-center justify-center mx-96">
                    <h3 className="font-semibold text-5xl">Our service features</h3>
                    <p className="text-center w-[27rem] mt-2">
                        Aliquid officiis cumque sunt sint. Et quo culpa. Enim
                        sed natus molestiae fugiat cum consequatur quia
                        sunt.
                    </p>
                </div>

                <div className="flex gap-10 p-16 justify-center">
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
            <section className="min-h-[44rem]  pt-28">
                <div className="flex flex-col items-center justify-center mx-96">
                    <h3 className="font-semibold text-5xl">Testimonials</h3>
                    <p className="text-center w-[27rem] mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Quisquam, repellendus numquam.
                    </p>
                </div>


                <div className="flex gap-10 p-16 justify-center">
                    <CardTestimonials name="Arya Sakti" jobDesk="CEO of Lapas Troops">
                        Et quibusdam voluptatem molestias cum
                        autem autem et ut. Ad et tenetur. Autem
                        quis id tempora accusantium quod dolores
                        et. Possimus voluptatem hic nulla
                        consequatur voluptates libero quia
                        expedita. Eum aut voluptatem qui
                        praesentium vitae.
                    </CardTestimonials>
                    <CardTestimonials name="Bill Fedro" jobDesk="Co-Founder of Lapas Troops">
                        Et quibusdam voluptatem molestias cum
                        autem autem et ut. Ad et tenetur. Autem
                        quis id tempora accusantium quod dolores
                        et. Possimus voluptatem hic nulla
                        consequatur voluptates libero quia
                        expedita. Eum aut voluptatem qui
                        praesentium vitae.
                    </CardTestimonials>
                    <CardTestimonials name="Arya Sakti" jobDesk="CEO of Lapas Troops">
                        Et quibusdam voluptatem molestias cum
                        autem autem et ut. Ad et tenetur. Autem
                        quis id tempora accusantium quod dolores
                        et. Possimus voluptatem hic nulla
                        consequatur voluptates libero quia
                        expedita. Eum aut voluptatem qui
                        praesentium vitae.
                    </CardTestimonials>

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
                    <div className="flex flex-col items-center justify-center mx-96 text-white">
                        <h3 className="font-semibold text-5xl">Start your free trial</h3>
                        <p className="text-center w-[27rem] mt-2">
                            Trial period - 14 days, no credit card required
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center mx-96">
                        <div className="join">
                            <input className="input input-bordered join-item w-72" placeholder="Your email address" />
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

            <section className="container">
                <Hero >
                    <h1 className="text-6xl font-semibold pr-12">
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