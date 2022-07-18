import React,{  useContext , useReducer  } from 'react';
import { BiChevronDown ,BiChevronUp } from "react-icons/bi"
import { BsBasket3 } from "react-icons/bs";

import Items from './Items';

const CartContext = React.createContext();

const InitialState = {
  items : Items,
}


const exampleReducer = (state,action) => {
  if(action.type === "ITEM_INCREMENT"){
    console.log("add item to cart")
    return state;
  }

}

const Cart = () => {
  const [ state, dispatch ] = useReducer(exampleReducer,InitialState);
  const data = state;

  return (
    <CartContext.Provider value={{ data }}>
      <Navbar />
      <section className="primary-grid">
          <CartList />
      </section>
    </CartContext.Provider>
  )
}

const CartList = () => {
  const { data } = useContext(CartContext);

  return(
    <>
    {data.items.map((phone) => {
      const { name , id , count , img , price } = phone ;
      return (
        <div key={id} className="phone">
          <img src={img} alt={name} />
          <div className="phone-details">
            <article>
              <span>{name}</span>
              <p>${price} </p>
              <button className="clear-btn">Remove</button>
            </article>

            <section className="action-buttons">
              <button>
               <BiChevronUp className="icon"/>
              </button>
                <span className="App-link">{count}</span>
              <button>
                <BiChevronDown className="icon"/>
              </button>
            </section>
          </div>
        </div>
      )
    })}
    </>
  )
}


const Navbar = () => {
  const { data } = useContext(CartContext);

  return(
    <nav className="navbar">
      <h2> Shopping Items </h2>
      <h3><BsBasket3 /><span>{data.itemsInCart}</span></h3>
    </nav>
  )
}

export default Cart;
