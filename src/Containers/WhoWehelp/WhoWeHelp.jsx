import { handCuff } from '../../assets'
import './WhoWeHelp.scss'

const WhoWeHelp = () => {

  return (
    <section className='container'>
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
    </section>
  )
}

export default WhoWeHelp