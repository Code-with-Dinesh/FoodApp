import { useContext } from "react";
import {CartContext} from '../../context/Context'
import toast, { Toaster } from 'react-hot-toast';
const Card = ({data}) => {
  let opt = data.options[0]
  let obj = Object.keys(opt);
  let cart = useContext(CartContext)
 
  const selectedPrice = data.options[0][cart.size] ? parseInt(data.options[0][cart.size]) : 0;

    return (
    
    <div className="">
        <Toaster />
      <div className="max-w-sm shadow-lg shadow-zinc-900 hover:scale-105 transition ease-in-out duration-200   border-gray-200 rounded-lg flex flex-wrap  bg-green-500 ">
        <img
          className="rounded-lg w-full object-cover h-[200px]"
          src={data.img}
          alt=""
        />

        <div className=" mt-3 mb-3  flex gap-6 w-full items-center justify-between px-2">
          <h5 className="mb-2 text-2xl font-bold tracking-tight   text-gray-900 dark:text-white">
            {data.name}
          </h5>

          <p className="mb-3 font-normal  text-zinc-700">
           {data.CategoryName}
          </p>
        </div>
        <div className="flex ml-2 items-center   w-full justify-evenly">

        
        <select className="w-16 rounded-sm " onChange={(e)=>cart.setqty(e.target.value)}>
          {Array.from({ length: 6 }).map((_, i) => (
            <option className="bg-orange-400" value={i + 1} key={i}>
              {i + 1}
            </option>
          ))}
        </select>

        <select className="w-16  rounded-sm " name=""  value={cart.size} id="" onChange={(e)=>cart.setsize(e.target.value)}>
          {
            obj.map((e,i)=>{

              return(
                <option className="" value={e} key={i}>
                  {e}
                 </option>
              )
            })
          }
        </select>
        <div className="text-md font-semibold text-zinc-700">  ₹  {cart.qty * selectedPrice}
        </div>
        <button
    onClick={() => {
        cart.setitem([...cart.item, {
            id: data._id,
            name: data.name,
            img: data.img,
            qty: cart.qty,
            price: selectedPrice
        }]);
        toast.success("Added to cart successfully");
    }}
    className="bg-yellow-500 px-3 py-1 font-semibold ml-2 rounded-md mt-2 mb-2"
>
    Add To Cart
</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
