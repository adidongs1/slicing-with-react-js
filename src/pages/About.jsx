import React from 'react'
import Layout from './Layout'
import Hero from '../components/Hero'


const pointAbout = [{

    id: 1,
    points: "Best Quality: We always strive for top-notch quality."
},
{
    id: 2,
    points: "Innovation: We're constantly seeking new ways to improve."
},
{
    id: 3,
    points: "Expert Team: Our team is skilled and dedicated."
},
{
    id: 4,
    points: "Your Community: We listen to our customers."
}]


function About() {

    const listItems = pointAbout.map(item => <li key={item.id}>{item.points}</li>);

    return (
        <Layout>

            <h1 className='text-6xl text-center font-bold mb-8'>About Us</h1>
            <Hero>
                <p className='text-xl font-normal mb-4'>At this company, we're committed to delivering the best in [product/service]. With a focus on innovation and dedication, we have a vision for making a positive impact.
                </p>

                <div>
                    <h2 className='text-xl font-normal'>Our Mission:</h2>

                    <ul className='list-disc mx-5'>
                        {listItems}
                    </ul>
                </div>
            </Hero>
        </Layout>
    )
}

export default About