import { useState } from 'react'

import Layout from './Layout'

function Contacts() {

    const options = [

        { value: '', text: 'Select project type', disabled: true },
        { value: 'webDesign', text: 'Web Design', disabled: false },
        { value: 'webDevelopment', text: 'Web Development', disabled: false },
        { value: 'mobileApp', text: 'Mobile App', disabled: false },
        { value: 'branding', text: 'Branding', disabled: false },
        { value: 'seo', text: 'SEO', disabled: false },
        { value: 'other', text: 'Other', disabled: false },
    ];

    const [getEmail, setEmail] = useState('');
    const [selectedOption, setSelectedOption] = useState(options[0].value);



    const handleChangeOptions = (e) => {
        console.log('options:', e.target.value);
        setSelectedOption(e.target.value);

    }


    return (
        <Layout>
            <section className='container mb-12'>
                <div className="grid md:grid-cols-2 gap-32">

                    <div className='w-full flex flex-col gap-12'>
                        <div className='flex flex-col gap-5'>
                            <h1 className='text-[4rem] font-bold'>Let's Talk</h1>
                            <p className='xl:w-[33rem]'>
                                Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help
                            </p>
                        </div>

                        <div className='flex flex-col gap-5'>
                            <h1 className="text-4xl ">Email</h1>
                            <p className='xl:w-[33rem]'>beebs@gmail.com</p>
                        </div>

                        <div className='flex flex-col gap-5'>
                            <h1 className="text-4xl">Socials</h1>
                            <a href='/' className='xl:w-[33rem] underline'>Instagram</a>
                            <a href='/' className='xl:w-[33rem] underline'>Twitter</a>
                            <a href='/' className='xl:w-[33rem] underline'>Facebook</a>
                        </div>
                    </div>


                    <form className='w-full' >
                        <div className='flex flex-col gap-7'>

                            <label className="form-control w-full flex flex-col gap-2">
                                <div className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </div>
                                <input type="Email" placeholder="Enter your Email here" className="input bg-base-200 w-full" />
                            </label>

                            <label className="form-control w-full flex flex-col gap-2">
                                <div className="label">
                                    <span className="label-text font-semibold">What service are you interested in</span>
                                </div>
                                <select className='select w-full bg-base-200' value={selectedOption} onChange={handleChangeOptions}>
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value} disabled={option.disabled}>
                                            {option.text}
                                        </option>
                                    )
                                    )
                                    }
                                </select>
                            </label>

                            <label className="form-control w-full flex flex-col gap-2">
                                <div className="label">
                                    <span className="label-text font-semibold">Message</span>
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