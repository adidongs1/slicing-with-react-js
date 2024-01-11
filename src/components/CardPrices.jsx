

function CardPrices({ price, title, desc, children }) {
    return (
        <>
            <div className="card w-80 h-[32rem] bg-base-100  border-2 rounded-3xl shadow-xl">
                <div className="card-body py-4">
                    <h1 className='text-[#848199] py-8'> <span className='text-success text-4xl font-bold'>${price}</span> / month</h1>
                    <h2 className="card-title text-success text-3xl">{title}</h2>
                    <p className='text-[#848199] mb-4 flex-grow-0 w-48'>
                        {desc}
                    </p>

                    <div className='grid grid-flow-row mb-auto'>
                        {children}
                    </div>
                    <div className="card-actions w">
                        <button className="py-3 px-16 bg-success rounded-full w-full text-white">Choose Plan</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardPrices