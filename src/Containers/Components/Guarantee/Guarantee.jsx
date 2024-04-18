import Pricing from '../../../Components/Pricing/Pricing'
import './guarantee.scss'
import {stamp } from '../../../assets'
import { OfferBtn } from '../../Offer/Ultimate/OffeBtn/OfferBtn'
import Button from '../../../Components/Button/Button'

const Guarantee = () => {
  return (
   <>
        <div className='guarantee_main'>
            <div className='guaranteeImg' >
                <img src={stamp} alt='stamp' width={'130px'} height={'130px'}/>
            </div>   
            <div className='guarantee'>
                    <h1>Guarantee</h1>
                    <h3>We'll drive in 30 new cases per months in 90 days 
                        or we'll work for you for FREE for the next 3 months</h3>
            </div>
        </div>

        <div className='pricOffr'>
            {/* <div className="background-image">
            </div> */}

            {/* the above is for seemed background */}
            <Pricing/>

            <OfferBtn/>

            <Button text={'Claim your spot here'} variant={'FFDE02'} 
                link={"https://calendly.com/tosinmedia-address/demo-call?month=2024-04"}/>


                <h3>
                    We’ll make your Firm the only choice
                </h3>
        </div>
   
   </>
  )
}

export default Guarantee