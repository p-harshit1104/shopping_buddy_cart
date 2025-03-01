import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {cart.length > 0 ? (
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl font-bold text-center mb-8 text-slate-700">Your Cart</h1>
          
          <div className="md:flex gap-8">
            <div className="md:w-2/3">
              {cart.map((item, index) => {
                return <CartItem key={item.id} item={item} itemidx={index} />;
              })}
            </div>

            <div className="md:w-1/3 mt-6 md:mt-0">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-xl font-bold text-slate-700 mb-4">
                  Order Summary
                </div>
                
                <div className="border-t border-b py-3 mb-4">
                  <p className="flex justify-between mb-2">
                    <span>Total Items:</span>
                    <span>{cart.length}</span>
                  </p>
                  <p className="flex justify-between font-bold text-lg">
                    <span>Total Amount:</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </p>
                </div>
                
                <button className="bg-green-600 text-white w-full py-2 rounded-md font-medium hover:bg-green-700 transition-colors">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[70vh]">
          <h1 className="text-2xl font-bold text-slate-700 mb-6">Your Cart is Empty</h1>
          <Link to={"/"}>
            <button className="bg-slate-900 text-white py-2 px-6 rounded-md font-medium hover:bg-slate-700 transition-colors">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;