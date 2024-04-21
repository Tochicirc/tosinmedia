import Calendly from '../../Components/Calendly/Calendly'
import './CalenderCont.scss'
import { InlineWidget } from "react-calendly";

const ClanderCont = () => {
  return (
    <div className='calenderCont_sect container'>
        <header className='calender_header'>
            <h3>
                Marketing is a collectively planned action and needs to be done right 
            </h3>
        </header >

        <InlineWidget url="https://calendly.com/tochigospel32" />
    </div>
  )
}

export default ClanderCont