import CheckIcon from '../assets/icon/check-circle-1.svg'

function BenefitPrices({ title }) {
    return (
        <div className="flex gap-3 mb-3">
            <img src={CheckIcon} alt="icon-check" />
            <p className="m-0 text-[#848199]">{title}</p>
        </div>
    )
}

export default BenefitPrices