import iconFlame from '../assets/flame.svg';

function CardService({ cardTitle, children }) {
    return (
        <div className="card w-72 h-64 bg-base-100 shadow-xl p-6">
            <img src={iconFlame} alt="IconCard" className='w-8' />
            <div className="mt-5">
                <h2 className="card-title text-3xl font-semibold">{cardTitle}</h2>
                <p className='mt-4'>{children}</p>
            </div>
        </div>
    )
}

export default CardService;