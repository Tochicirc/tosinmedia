import './ContentOptions.scss'
import Button2 from '../../../Components/Button2/Button2'
import { camcoder, file, laught, pencil, phot, plus, smile } from '../../../assets'

const ContentOptions = () => {

    const EmojiDiv =[
        {
            emoji: laught,
            title:'Motion Graphics'
        },

        {
            emoji:camcoder,
            title: 'Video Editing'
        },

        {
            emoji: phot,
            title:'Photo Manipulation'
        }, 
        
        {
            emoji:pencil,
            title: 'Graphics'
        },
        
        {
            emoji:file,
            title: 'Copywriting'
        },
        {
            emoji:smile,
            title: 'Illustration'
        },
        {
            emoji: plus,
            title: 'Add More'
        }
    ]

    // const renderEmoji = (emoji, text) => {
    //     if (typeof emoji === String){
    //         return<div>
    //                 <span>{emoji}</span>
    //                 <h1>{text}</h1>
    //             </div>
    //     }else{
    //         return<div>
    //                 <img src={emoji} />
    //                 <h1>{text}</h1>
    //             </div>
    //     }
    //   };
  return (
    <div className='content_option'>
            <Button2 text={'Content options'} varient={'#0A66C2'}/>

            <div className='contentDiv'>
                {EmojiDiv.map((item, index) => (
                    <div key={index} className='item'>
                        <div className='itemImg'>
                            <img src={item.emoji} alt={item.title} width={'50px'} height={'50px'}/>
                        </div>
                        <h3>
                            {item.title}
                        </h3>

                    </div>
                ))}
            </div>
    </div>
  )
}

export default ContentOptions

