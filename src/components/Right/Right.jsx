import React from "react";

const Right = () => {
  return (
    <div className="bg-[green] h-screen w-45/70 float-right">
      <div className="relative h-[67%] w-1/3 bg-[blue] m-5 mt-20">
        <img
          className="w-full h-full object-cover"
          src="https://i.pinimg.com/1200x/b9/0a/21/b90a21804d5cca6999e55a4739ab70bb.jpg"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-transparent bg-opacity-70 text-white p-4">
            <div>1</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ducimus voluptatum aperiam dolore culpa rerum totam atque.</div>
            <button className="bg-black text-white p-2 rounded-[20px] mt-5">READ MORE</button>
            <button>ARROW</button>
        </div>
      </div>
    </div>
  );
};

export default Right;
