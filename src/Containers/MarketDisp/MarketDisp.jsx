import React from 'react'
import './MarketDisp.scss'
import MarketComp from '../../Components/MarketDisCompent/MarketComp'
import { animation, desktop1 } from '../../assets'

const MarketDisp = () => {
  return (
    <section className='market_sect'>
        <div className='container marketCont' >
            <div className='mark_header'>
                <h3 className='smalheader'>
                    Market like a disruptor
                </h3>
            </div>

            <div className='mark_midDiv'>
                <div className='midDiv_Cont-left'>
                    <MarketComp text={'Insight Clarity'} btn={'Full transparency'} 
                    article={'See all your marketing data and results in real-time effortlessly. Unparalleled Transparency'}/>

                    <MarketComp text={'Marketing optimization'} btn={'Custom craft'} 
                    article={'A fine-tuned marketing approach that fits your law firm like a glove. No one-size-fits-all ❌'}/>
                </div>

                <div className='midDiv_img'>
                    <div>
                        <img src={desktop1} alt='desktop' />
                    </div>
                    {/* <img src={animation} alt='svganimation'/> */}
                </div>

                <div className='midDiv_Cont-left'>
                    <MarketComp text={'Make your journey a breeze'} btn={'clear marketing path'} 
                    article={'From getting quality leads to strengthening your brand, we’ll make your journey crystal clear.'}/>

                    <MarketComp text={'360 Goal tracker '} btn={'Track your marketing goals'} 
                    article={'Our software makes tracking progress to wards your goal a walk in the park. You’ll always know how close you are to your target goal.'}/>
                </div>
            </div>

            <div className='jua_Div'>
                <h3 className='jua-font'>We believe marketing is more than just ads.</h3>
            </div>
        </div>
    </section>
  )
}

export default MarketDisp