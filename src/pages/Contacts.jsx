import React from 'react'
import Layout from './Layout'

function Contacts() {
    return (
        <Layout>
            <section className='container mb-12'>
                <div className="flex gap-32">

                    <div className='w-full flex flex-col gap-12'>
                        <div className='flex flex-col gap-5'>
                            <h1 className='text-[4rem] font-bold'>Let's Talk</h1>
                            <p className='w-[33rem]'>
                                Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help
                            </p>
                        </div>

                        <div className='flex flex-col gap-5'>
                            <h1 className="text-4xl">Email</h1>
                            <p className='w-[33rem]'>beebs@gmail.com</p>
                        </div>

                        <div className='flex flex-col gap-5'>
                            <h1 className="text-4xl">Socials</h1>
                            <a href='/' className='w-[33rem] underline'>Instagram</a>
                            <a href='/' className='w-[33rem] underline'>Twitter</a>
                            <a href='/' className='w-[33rem] underline'>Facebook</a>
                        </div>
                    </div>

                    <form className='w-full' >
                        <div className='flex flex-col gap-7'>
                            <label className="form-control w-full flex flex-col gap-2">
                                <div className="label">
                                    <span className="label-text">Email</span>
                                </div>
                                <input type="Email" placeholder="Enter your Email here" className="input bg-base-200 w-full" />
                            </label>
                            <label className="form-control w-full flex flex-col gap-2">
                                <div className="label">
                                    <span className="label-text">What service are you interested in</span>
                                </div>
                                <select className='select w-full bg-base-200'>
                                    <option disabled selected>Select project type</option>
                                    <option>Web Design</option>
                                    <option>Web Development</option>
                                    <option>Mobile App</option>
                                    <option>Branding</option>
                                    <option>Other</option>

                                </select>
                            </label>

                            <label className="form-control w-full flex flex-col gap-2">
                                <div className="label">
                                    <span className="label-text">Message</span>
                                </div>
                                <textarea className="textarea bg-base-200 h-40" placeholder="Enter your message here"></textarea>
                            </label>
                            <button type='submit' className='btn btn-success text-white'>Submit</button>
                        </div>
                    </form>

                </div>
            </section>
        </Layout>
    )
}

export default Contacts