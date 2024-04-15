import Button2 from '../../Components/Button2/Button2'
import { handCuff } from '../../assets'
import './WhoWeHelp.scss'

const WhoWeHelp = () => {

  return (
    <section className='container Wwh_sect'>
        <div className='Wwh_upper'>
            <div className='wwh-left'>
                <div className='wwh-left-btn'>
                    <p>
                        WHO WE HELP
                    </p>
                </div>

                <h3>
                    Lawyers We Help
                </h3>
                <p>
                    Fot case-hungry firms ready to take things up the notch
                    <br/> 
                    We have solutions that are tailored specifically to your business needs
                </p>
            </div>

            <div className='wwh-right'>
                <div className='wwh-right_img'>
                    <img src={handCuff} alt='handcuff' width={'120px'} height={'120px'}/>

                    <svg>

                    </svg>
                </div>

                <h3>
                    Criminal Defence
                </h3>

                <p>
                    We serve one Clientele- we serve you with a monostatic focus and <br/> better
                    than anyone else. if you want an agency that serves and
                    <br/> entire industry
                    with solutionsthat won't move needleforward, we're 
                    <br/>not for you
                </p>
            </div>
        </div>

        <Button2 text={'Our 90-day break-the-bank lead gen offer'} varient={'#0b333eda'}/>

        <div className='wwh_lastHeader'>
            <h1 className=''>
                We’ll drive in 30+ New Cases Per Month 
                or we’ll work for you for free
            </h1>
        </div>
    </section>
  )
}

export default WhoWeHelp