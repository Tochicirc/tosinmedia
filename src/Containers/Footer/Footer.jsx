import Button from '../../Components/Button/Button'
import { TosinLogo } from '../../assets'
import './Footer.scss'
const Footer = () => {

    const links =[
        {
            title:'MIA Software',
            link:''
        },
        {
            title:'Our Process',
            link:''
        },
        {
            title:'Disclaimer',
            link:''
        },
        {
            title:'Terms Of Service',
            link:''
        },
    ]
  return (
    <footer className='footer container'>

        <div className='footer_image'>
            <img src={TosinLogo} width={'220px'} height={'220px'}/>
        </div>
        <div className='footer_list'>
            <ul>
                {links.map((link, index)=>(
                    <li key={index}><a href={link.link}>{link.title}</a></li>
                ))}
            </ul>

            <Button text={'Claim your spot '} 
                variant={'FFDE02'} link={'https://calendly.com/tosinmedia-address/demo-call?month=2024-04'}/>

                <div className='copy'>
                    <p>© 2024</p>
                </div>
        </div>
    </footer>
  )
}

export default Footer