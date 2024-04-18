import './Pricing.scss'

const Pricing = () => {
  return (
    <div className='pricing'>
          <div>
            <h1 className='header'>
                Pricing
            </h1>
            <p>We charge  a flat fee</p>
          </div>

          <div>
            <h1 className='header'>
              $3999
            </h1>
            <p>
              <del><strong>$6,299</strong></del>
            </p>
          </div>
        </div>
  )
}

export default Pricing