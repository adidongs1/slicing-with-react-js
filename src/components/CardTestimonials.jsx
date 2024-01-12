


function CardTestimonials({ name, position, imgProfile, children }) {
    return (
        <>
            <div className="card w-96 min-h-80 bg-base-100 shadow-xl p-6 border-2">
                <div className="flex items-center">

                    <section className="avatar">
                        <div className="w-16 rounded-full">
                            <img src={imgProfile} />
                        </div>
                    </section>

                    <section>
                        <div className="flex flex-col mx-4">
                            <h2 className="card-title text-base font-semibold">{name}</h2>
                            <p className="text-sm font-normal">{position}</p>
                        </div>
                    </section>

                </div>

                <div className="mt-6">
                    <p>
                        {children}
                    </p>
                </div>
            </div>

        </>
    )
}

export default CardTestimonials;