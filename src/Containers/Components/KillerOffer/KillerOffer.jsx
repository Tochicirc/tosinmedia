import './KillerOffer.scss'
    import {stack,electricar,exclamation,thinking,update, tiplight } from '../../../assets';

const KillerOffer = () => {



    const list = ['Charge your Worth - your ACTUAL worth','Sell the Lead even before the first meeting',
                    'Be a Primary Driver in this industry','Set Clear Expectations and Results'];

    const howItems = [
        {
            icon:thinking,
            text:'Identify their Dream Outcome'
        },
        {
            icon:exclamation,
            text:'List Their Problems/Obstacles'
        },
        {
            icon:tiplight,
            text:'Turn the Problems into Solutions'
        },
        {
            icon:update,
            text:'ENHANCING THE OFFER'
        },
        {
            icon:stack,
            text:'Trim & Stack High Value deliverables'
        },
        {
            icon:electricar,
            text:'Create Your Solutions Delivery Vehicles'
        }
    ]                
  return (
    <div className='killer_sect'>
        <div className='killer_header'>
            <h1>
                Killer Offer
            </h1>
            <p>
                An offer so good your leads feel bad saying NO!
            </p>
        </div>

        <div className='killer_mid'>
            <strong>A Good Offer can save a Bad Copy</strong>
            <p>By Identifying your unique avatar, their pain, 
                their biggest objections, their needs, goals, hopes.
            </p>
    	    
            <div className='killer_ul'>
                <strong>We'll help you:</strong>
                {list.map((lists,index)=>(
                    <p key={index}>
                        ⸱{lists}
                    </p>
                ))}
            </div>

        </div>

        <div className='killer_how'>
                <h3>
                    How?
                </h3>

                <div className='killer_items'>
                    {howItems.map((items,index)=>(
                        <div className='killer_item' key={index}>
                            <img src={items.icon} alt={items.text} width={'70px'} height={'70px'}/>
                            <strong>{items.text}</strong>
                        </div>
                    ))}
                </div>
        </div>
    </div>
  )
}

export default KillerOffer