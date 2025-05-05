import './Usercard.css'
import opa from '../../assets/opa.png'

function usercard(props) {
    
  return (
       
    <div className='usercard' style={{backgroundColor: props.props.bg}}>
      <img src={opa} alt="" />
      <h2>{props.props.ism}</h2>
      <p>{props.props.lavozim}</p>
      <p>{props.props.kasbi}</p>
    </div>
  )
}

export default usercard
