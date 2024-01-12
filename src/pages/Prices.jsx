import Layout from './Layout'

import CardPrices from '../components/CardPrices'
import BenefitPrices from '../components/BenefitPrices'

function Prices() {
    return (
        <>
            <Layout>
                <h1 className='text-6xl text-center font-semibold'>Lets Start Together</h1>
                <section className='container my-20'>

                    <div className="grid xl:grid-cols-3 justify-center gap-9">

                        <CardPrices price="19" title="Stater" desc="Unleash the power of automation.">
                            <BenefitPrices title="Multi-step Zap" />
                            <BenefitPrices title="3 Premium Apps" />
                            <BenefitPrices title="2 Users Team" />
                        </CardPrices>

                        <CardPrices price="54" title="Professional" desc="Automation tools to take your work to the next level.">
                            <BenefitPrices title="Multi-step Zap" />
                            <BenefitPrices title="Unlimited Premium " />
                            <BenefitPrices title="50 Users team" />
                            <BenefitPrices title="Shared Workspace" />
                        </CardPrices>

                        <CardPrices price="89" title="Company" desc="Automation plus enterprise-grade features.">
                            <BenefitPrices title="Multi-step Zap" />
                            <BenefitPrices title="Unlimited Premium " />
                            <BenefitPrices title="Unlimited Users team" />
                            <BenefitPrices title="Advance Admin" />
                            <BenefitPrices title="Custom Data Retention" />
                        </CardPrices>

                    </div>

                </section>
            </Layout>
        </>
    )
}

export default Prices