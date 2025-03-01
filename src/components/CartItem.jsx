import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { remove } from '../redux/Slices/CartSlice';
import { toast } from "react-toastify";

const CartItem = ({ item, itemidx }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }
  
  return (
    <div className="flex flex-col md:flex-row items-center p-4 bg-white rounded-lg shadow-sm mb-4 gap-4">
      <div className="md:w-1/4 h-32 flex items-center justify-center">
        <img className="h-full object-contain" src={item.image} alt={item.title} />
      </div>
      
      <div className="md:w-3/4 space-y-3">
        <h1 className="text-lg text-slate-700 font-semibold">{item.title}</h1>
        <p className="text-sm text-slate-500 line-clamp-2">{item.description}</p>
        
        <div className="flex items-center justify-between">
          <p className="font-bold text-lg text-green-600">${item.price}</p>
          <button 
            className="text-red-800 bg-red-200 hover:bg-red-400 transition-colors duration-300 cursor-pointer rounded-full p-2"
            onClick={removeFromCart}
          >
            <RiDeleteBin6Fill size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;