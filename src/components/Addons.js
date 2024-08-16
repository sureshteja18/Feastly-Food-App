import React, {useEffect} from "react";

const Addons=({data,open,setOpen})=>{
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [open]);

    const handleClick =()=>{
        setOpen();
    }


    return(
        <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white  p-4 rounded-lg shadow-md ${open ? 'block' : 'hidden'}`}>
        <div className="relative">
          <button onClick={handleClick} className="absolute top-0 right-0 p-2 bg-white rounded shadow-md">
            X
          </button>
          <div className="text-center ">
            <h2 className="font-bold text-xl p-4">React Couse By SureshTeja</h2>
            <p className="p-4 text-sm ">
              Below is the cheat sheet for React you can use it when you needed
              dorp a mail and you can download it from the link
            </p>
          </div>
          <input
            type="email"
            placeholder="Enter Your Email"
            required
            className="block w-56 px-4 py-2 mt-2 mx-auto text-gray-700 bg-white border border-gray-200 rounded focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4 mx-auto block">
            Download File
          </button>
        </div>
      </div>
    )
}

export default Addons;