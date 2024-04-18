import Cmr from '../Components/Cmr/Cmr';
import InfoProducts from '../Components/InfoProducts/InfoProducts';
import KillerOffer from '../Components/KillerOffer/KillerOffer';
import SeoBlog from '../Components/Seo/SeoBlog';
import Socialmedman from '../Components/Socialmedman/Socialmedman';
import TargetedEmail from '../Components/TargetedEmail/TargetedEmail';
import Yoc from '../Components/Yoc/Yoc';
import './Bonus.scss';
import Guarantee from '../Components/Guarantee/Guarantee';
const Bonus = () => {
  return (
    <section className='container bonus_sect'>
      <div className='bonusHeader'>
        <div className='bonus_h3'> 
          <h3 className=''>
            Get your money’s worth • Our only goal is to help you reach yours 
          </h3>
        </div>
            
        <div className='bonus_h1'>
          <h1>
            Bonus
          </h1>
        </div>
      </div>
      <TargetedEmail/>
      <Socialmedman />
      <SeoBlog/>
      <Yoc/>

      <KillerOffer/>
      <Cmr/>
      <InfoProducts/>
      <Guarantee/>
    </section>
  );
};

export default Bonus;
