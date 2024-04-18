import './OfferBtn.scss'
import { trace1 } from '../../../../assets'

export const OfferBtn = ({text}) => {
  return (
    <footer className='offerfooter'>
          <img src={trace1} alt='trace1' width={'40px'} height={'40px'}/>

          <p>️ ️ We only accept 5 new firms ready to get results every 4 months. We are currently at 60% to capacity for 
this cohort, take the next available spot or wait till we reopen.</p>
    </footer>
  )
}
