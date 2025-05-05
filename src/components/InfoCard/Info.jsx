import './InfoCard.css'
import tog from '../../assets/tog.png'

function info(props) {
  return (
    <div className='info'>
      <img src={tog} alt="" />
      <h3>{props.props.nomi}</h3>
      <p>{props.props.malumot}</p>
    </div>
  )
}

export default info
