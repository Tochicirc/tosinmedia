import { zigzagArrow } from '../../../assets'
import './UltimateSales.scss'

const UltimateSales = () => {

  return (
    <div className='Ultimste_sect'> 
        <div className='ultimateHeader'>
            <h1 className='header'>
                Ultimate Sales Funnel
            </h1>
            <p>
                Stay-ahead Of Your Leads - Lead The Way
            </p>
        </div>

        <div className='UltimateOthers'>
            <div className='Ultimatothers-up'>
                <h3 className='jua'>
                    First, we fully understand the problem you solve for your clients
                </h3>

                <div className='ultimateImg'>
                    <img className='right' src={zigzagArrow} alt='spring'/>

                </div>

                <h3>
                    We pull in leads in the numbers
                </h3>
            </div>

            <div className='Ultimatothers-up'>
                <h3 className='jua'>
                    We nurture and convert
                </h3>

                <div className='ultimateImg'>
                    <img className='left' src={zigzagArrow} alt='spring'/>

                </div>

                <h3>
                    We qualify the leads to confirm their interest
                </h3>
            </div>

        </div>
    </div>
  )
}

export default UltimateSales