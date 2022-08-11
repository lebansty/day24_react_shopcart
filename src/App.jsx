// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './Nav';
import Card from './Card';
import Cart from './Cart';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
function App() {

const products = [
  {
    id:1,
    title:'T-Shirt',
    price:1050,
    rating:3
  },
  {
    id:2,
    title:'Jacket',
    price:2000,
    rating:2
  },
  {
    id:3,
    title:'Sneaker',
    price:2500,
    rating:4
  },
  {
    id:4,
    title:'Formal Shirt',
    price:3000,
    rating:1
  },
  {
    id:5,
    title:'Joggers',
    price:900,
    rating:5
  },
  {
    id:6,
    title:'Flip-Flops',
    price:1200,
    rating:3
  }
]

const [cart,setCart] = useState([]);
const [total,setTotal] = useState(0)

let addToCart = (item) =>{
 setCart([...cart,item])  
 setTotal(total + item.price)
}

let removecart =(val) =>{
  let index = cart.findIndex(obj=>obj.id===val.id);
  cart.splice(index,1);
  setCart([...cart]);
  setTotal(total - val.price )

}

  return (
    <>
    <Nav></Nav>
    <div className='banner'>
      <div className='head'>
      Shop in style
      </div>
      <div className='subHead'>
        With this shop hompage template
      </div>
    </div>
    <div className='container mt-3 '>
      <div className='row'>
      <div className='col-lg-8'>
        <div className='row'>
        {
          products.map((item)=>{
           return <Card item={item} cartItem={cart} setAdd={addToCart}></Card>

          })
        }

      
        </div>
      

      </div>
      <div className="col-lg-3">
      <div className='row'>
      <ol className="list-group list-group-numbered"><span id='cartBox'>Cart <FontAwesomeIcon icon={faCartShopping} /></span>
       {
        cart.length === 0 ? (<div>No Items in cart</div>) : (cart.map((val)=>{
          return <Cart cartItem={val} removeCart={removecart}></Cart>
        }))
       }
  <span>Total price-{total} </span>
  
</ol>

      </div>
     
      </div>

      </div>
      
      
   

    

    </div>
    <div className='footer'>
      Footer

    </div>
    </>
    
    
  );
}

export default App;
