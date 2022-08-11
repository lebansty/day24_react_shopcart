let Cart = ({ cartItem,removeCart }) => {
    return <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">{cartItem.title}</div>
      <b>&#x20B9; </b>{cartItem.price}
    </div>
    <button type="button" onClick={()=>{removeCart(cartItem)}} className="btn btn-dark">x</button>
  </li>
}

export default Cart;