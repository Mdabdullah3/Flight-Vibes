import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-black text-white  ">
      <div className="md:w-10/12 w-11/12 mx-auto">
        <div className="flex-1">
          <h1 className="text-2xl">Travel Guru</h1>
        </div>
        <div className="flex-none">
          <div className="w-14 rounded-full">
            <img
              className="rounded-full"
              alt="Logo"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
