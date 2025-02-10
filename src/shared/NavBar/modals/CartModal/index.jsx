import CartItem from "./CartItem";
import SessionContext from "contexts/SessionContext";
import { useState, useEffect, useContext, useCallback } from "react";
import * as cartService from "services/cart";
import LoadingSpinner from "shared/LoadingSpinner";
import { motion } from "framer-motion";

const CartModal = (props) => {
  const { username } = useContext(SessionContext);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCart = useCallback(async() => {
    setIsLoading(true);
    const response = await cartService.getCart();
    const data = await response.json();
    setCartItems(data);
    setIsLoading(false);
  }, [])

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  
  let total = 0;
  let quantity = 0;

  for (let i = 0; i < cartItems.length; i++) {
    total += cartItems[i].price_per_unit * cartItems[i].quantity;
    quantity += cartItems[i].quantity;
  }

  return (
    <motion.div className="cart-modal h-screen h-[100dvh] w-full max-w-xl bg-white flex flex-col trigger-rebuild"
        initial={{ translateX: '100%'}} animate={{ translateX: 0}} transition={{ duration: 0.5 }}
    >
        <div className="bg-emerald-800 text-white font-playfair py-7 text-3xl text-center shadow-lg relative">
        {username}&apos;s Cart
        </div>
        {isLoading ? (
            <LoadingSpinner />
        ) : (
            <>
                <div className="relative px-8 py-8 overflow-y-scroll flex-1">
                    {cartItems.map((cartItem, idx) => (
                        <CartItem key={cartItem.id} cartItem={cartItem} idx={idx} fetchCart={fetchCart} />
                    ))}
                </div>
                <div className="border-t border-slate-200 flex flex-col text-slate-400 px-6 py-4">
                    <div className="flex justify-between items-center mb-2">
                        <div>{quantity} items</div>
                        <div>subtotal:<span className="text-slate-500 ml-2 font-bold">${total}</span></div>
                    </div>
                    <button className="bg-emerald-700 rounded-full py-3 text-white my-1 text-lg" onClick={() => {
                        alert("this is not a real plant selling site :)")
                    }}>checkout
                        <i className="ml-2 fa-solid fa-bag-shopping i"></i>
                    </button>
                </div>
            </>
            
        )}
    </motion.div>
  );
};

export default CartModal;
