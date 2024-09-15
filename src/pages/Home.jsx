import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Advertise from "../components/Advertise";
import Card from "../components/Card";
import { IoMdClose } from "react-icons/io";
import Footer from "./Footer";
const Home = () => {
  const [fooditem, setfooditem] = useState([]);
  const [foodcate, setfoodcate] = useState([]);
  const [serarchitem, setsearchitem] = useState("");
  const fetchdata = async () => {
    const response = await fetch("http://localhost:5000/api/v1/display", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    let myresponse = await response.json();
    // console.log(myresponse);
    setfooditem(myresponse[0]);
    setfoodcate(myresponse[1]);
    // console.log(fooditem);
    // console.log(foodcate);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="w-full h-[50vh] bg-[url(https://images.unsplash.com/photo-1689020353604-8041221e1273?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center flex items-center justify-center">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-5xl text-white font-semibold">
            Get food delivery and more
          </h1>
          <div className="mt-5 relative  w-full flex p-2 justify-center items-center">
            <input
              onChange={(e) => setsearchitem(e.target.value) }
             
              value={serarchitem}
              className="w-[70%] bg-zinc-200 border-none outline-none px-3 py-2 rounded-md"
              type="text"
              placeholder="Search item"
            
            />
             
            <IoMdClose onClick={()=>setsearchitem("")} className={`absolute ${serarchitem === "" ?"hidden":"block"} right-28 cursor-pointer`} size={20} />
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap gap-4  mb-12 items-center justify-center mt-5">
        {foodcate !== null ? (
          foodcate.map((item, index) => {
            return (
              <div className=" w-full flex  flex-col items-center ">
                <div
                  className="text-2xl text-zinc-600 font-semibold"
                  key={item._id}
                >
                  {item.CategoryName}
                </div>
                <hr />
                <div className=" w-full  mt-5 flex gap-8 flex-wrap justify-center items-center">
                  {fooditem
                    .filter(
                      (filteritem) =>
                        filteritem.CategoryName === item.CategoryName &&
                        filteritem.name.toLowerCase().includes(serarchitem)
                    )
                    .map((filterdata) => {
                      return (
                        <>
                          <div key={filterdata._id}>
                            <Card data={filterdata} />
                          </div>
                        </>
                      );
                    })}
                  {
                    // Display a message if no items match the search criteria
                    fooditem &&
                      fooditem.filter(
                        (filteritem) =>
                          filteritem.CategoryName === item.CategoryName &&
                          filteritem.name
                            .toLowerCase()
                            .includes(serarchitem.toLowerCase())
                      ).length === 0 && (
                        <div className="text-lg text-zinc-600">No food items found matching your search.</div>
                      )
                  }
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-5xl bg-black flex items-center justify-center">
            Loading ....
          </div>
        )}
      </div>

      <Advertise />
      <Footer/>
    </div>
  );
};

export default Home;
