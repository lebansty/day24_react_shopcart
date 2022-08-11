import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



let Card = ({ item,cartItem, setAdd }) => {
    return <div className='col-lg-4 mb-3' >
        <div className="card text-center" id='cardDes' style={{ width: '15rem' }}>
            <img src="https://picsum.photos/200/150" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text"><b>&#x20B9; </b>:{item.price}</p>
                <div className="mb-2 mt-0">
                    {(item.rating===1)?<span className='checked'><FontAwesomeIcon icon={faStar} /></span>:(item.rating===2)?<span className='checked'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span>: (item.rating===3)?<span className='checked'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span>: (item.rating===4)?<span className='checked'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span>: 
(item.rating===5)?<span className='checked'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span>:null
                        
                    }
                  

                </div>
                <button disabled={cartItem.some(obj=>obj.id===item.id)} className="btn btn-light" onClick={() => { setAdd(item) }}>Add to cart</button>
            </div>
        </div>

    </div>
}

export default Card;