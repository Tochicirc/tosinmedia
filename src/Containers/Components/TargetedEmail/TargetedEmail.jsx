import './TargetedEmail.scss'

const TargetedEmail = () => {

    const listItems = [
        'Clear marketing goals',
        'Build and maintain targeted lists',
        'Craft well-written emails that offer value',
        ' Measure and improve performance',
        'A/B testing',
        'Attention to legal compliance'
        ]  
  return (
    <div className='targets_sect'>
       <div className='target_header'>
            <h1>
                	Targeted Email Campaign
            </h1>
            <p>$40 for every $1 spent ・ Meet them at their soft spot</p>
       </div>

       <div className='target-grid'>
           <div className='target_grids'>
                <h3>
                    We'll
                </h3>
                <p>Build, Optimize and Personalize</p>
                <p>campaigns and journeys</p>
           </div>

           <div className='target_grids'>
                <ul>
                    {listItems.map((list,index)=>(
                        <li key={index}>
                            {list}
                        </li>
                    ))}
                </ul>
           </div>
       </div>
    </div>
  )
}

export default TargetedEmail