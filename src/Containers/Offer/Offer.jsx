import Button2 from '../../Components/Button2/Button2'
import { trace1 } from '../../assets'
import Content from './Content/Content'
import ContentOptions from './ContentOptions/ContentOptions'
import './Offer.scss'
import Socialcontent from './Socialcontent/Socialcontent'
import { OfferBtn } from './Ultimate/OffeBtn/OfferBtn'
import UltimateSales from './Ultimate/UltimateSales'
import Button from '../../Components/Button/Button'
import Pricing from '../../Components/Pricing/Pricing'


const Offer = () => {


  return (
    <section className='container offer_sect'>
       <div className='upperOffer'>
          <hr/>
          <p>We Know You ・ We Understand You ・ We are your best chance</p>
       </div>


       <div className='Social_media'>
          <div className='socialHeader'>
              <h1 className='header'>
                Social Media Advertising
              </h1>
              <p>
                Advertise To Your Target  
              </p>
          </div>

          <div className='social_Ads'>
          <Socialcontent/>
          </div>
       </div>    

       <div className='Social_media ' style={{marginTop:'5rem'}}>
          <div className='socialHeader'>
              <h1 className='header'>
                Content Creation Machine
              </h1>
              <p>
                Dominate The Social Media Game  
              </p>
          </div>

          <div className='content'>
            <Content/>
          </div>

          <div className='contentBtn'>
            <ContentOptions/>
          </div>
        </div>   

        <div className='Social_media'>
            <UltimateSales/>
        </div>

        <Pricing/>    

        <OfferBtn/>

        <Button link={"https://calendly.com/tosinmedia-address/demo-call?month=2024-04"} 
            text={'Claim your spot here'} variant={'FFDE02'} />
    </section>
  )
}

export default Offer