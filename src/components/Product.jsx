import { useSelector, useDispatch } from "react-redux";
import { add, remove } from '../redux/Slices/CartSlice';
import { toast } from "react-toastify";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  function removeFromCart() {
    dispatch(remove(post.id));
    toast.error("Item removed from the cart");
  }

  function addToCart() {
    dispatch(add(post));
    toast.success("Item added to the cart");
  }

  return (
    <div className="flex flex-col items-center justify-between 
    hover:scale-105 transition duration-300 ease-in gap-3 p-4 mt-10 mx-2
    rounded-xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] outline">
      <div className="w-full">
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-full mt-1">{post.title}</p>
      </div>
      <div className="w-full">
        <p className="w-full text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
      </div>
      <div className="h-[180px] w-full flex items-center justify-center p-2">
        <img src={post.image} className="h-full max-h-[160px] object-contain" alt={post.title} />
      </div>

      <div className="flex justify-between items-center w-full mt-auto">
        <div>
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>
        
        {
          cart.some((p) => p.id === post.id) ?
          (<button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
            text-[12px] p-1 px-3 uppercase 
            hover:bg-gray-700
            hover:text-white transition duration-300 ease-in"
            onClick={removeFromCart}>
            Remove Item
          </button>) :
          (<button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
            text-[12px] p-1 px-3 uppercase 
            hover:bg-gray-700
            hover:text-white transition duration-300 ease-in"
            onClick={addToCart}>
            Add to Cart
          </button>)
        }
      </div>
    </div>
  );
};

export default Product;