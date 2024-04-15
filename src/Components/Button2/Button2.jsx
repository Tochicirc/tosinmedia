import "./Button2.scss"

const Button2 = ({text,varient}) => {
  return (
    <div className='wwh_midText' style={{background: `${varient }`}}>
        <h3 className='smalheader'>
            {text}
        </h3>
    </div>
  )
}

export default Button2