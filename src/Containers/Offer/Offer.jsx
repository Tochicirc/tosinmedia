import Button2 from '../../Components/Button2/Button2'
import Content from './Content/Content'
import './Offer.scss'
import Socialcontent from './Socialcontent/Socialcontent'
// import "../../Varial.scss"
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
            <Button2 text={'Content options'} varient={'#0A66C2'}/>
          </div>
        </div>   
    </section>
  )
}

export default Offer