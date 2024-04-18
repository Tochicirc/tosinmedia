import { improvement, targetImg, strategy, facebookIcon, instagramIcon, tiktok, linkedlnIcon, twitterIcon } from "../../../assets";
import './Socialmedman.scss'
const Socialmedman = () => {
  const management = [
    {
      icon:strategy,
      title: 'Strategy Creation',
      text: (
        <>
          <p>
            A diverse content mix, including videos, text, images, and infographics.
          </p>
          <p>
            A content strategy that educates, entertains, and adds value to your audience.
          </p>
        </>
      )
    },
    {
      icon: targetImg,
      title: 'Inbound Engagement & Analytics Monitoring',
      bold: 'We',
      text: (
        <p>
          With regular performance metric analysis  like engagement, reach, and conversions,
        </p>
      ),
      list: [
        'Refine and optimize the implemented content strategy,',
        'Create the optimum content calendar,',
        'Possess a clear view of your competitors performance, and',
        'Stay on top of your account growth.'
      ]
    },
    {
      icon: improvement,
      title: 'Innovation and Improvement',
      text: (
        <>
          <p>
            With account managers who genuinely care about making your life easier, 
            we proactively find creative solutions to everyday problems.
          </p>
          <p>
            Ultimately, more time for you to focus on <strong>GROWTH</strong> and
            <strong> STRATEGY.</strong>
          </p>
        </>
      )
    }
  ];

  const Icons=[
    {
        title: 'facebook',
        link:'#',
        image: facebookIcon,
    },
    {
        title: 'linkedln',
        link:'#',
        image: linkedlnIcon,
    },
    {
        title: 'instagram',
        link:'#',
        image: instagramIcon,
    },
    {
        title: 'twitter',
        link:'#',
        image:  twitterIcon,
    },
    {
        title: 'facebook',
        link:'#',
        image: tiktok,
    }
  ]

  return (
    <div className="socialmed_man_sect">
      <div className="socialmed_man-header">
        <h1 className="">Social Media Accounts Management</h1>
        <p className="norm">Strengthen your online presence ・ With us, it's not rocket science</p>
      </div>
      <div className="socialItems">
        {management.map((item, index) => (
          <div className="socialItem" key={index}>
            <div className="socialItem-header">
              <div className="socialItem_img">
                <img src={item.icon} alt={item.title} width={'80px'} height={'80px'}/>
              </div>

              <h3>{item.title}</h3>
            </div>
            <div className="social_text">{item.text}</div>

            {item.list && (
              <div>
                {item.list.map((listItem, index) => (
                  <p key={index}>・{listItem}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <ul className="social_icons">
        {Icons.map((icon,index)=>(
            <li key={index}><a href={icon.link}><img src={icon.image} width={'40px'} height={'40px'}/></a></li>
        ))}
      </ul>
    </div>
  );
};

export default Socialmedman;
