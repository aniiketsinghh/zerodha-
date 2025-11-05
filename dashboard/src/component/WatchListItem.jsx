import React from "react";
import { List, AlignEndHorizontal, Ellipsis, ArrowDown, ArrowUp } from "lucide-react";

const WatchListItem = ({ item, key }) => {
  return (
    <div className="group relative flex items-center w-full max-w-2xl h-10 bg-white  transition hover:shadow-lg border-b border-gray-200 mb-2 pb-2 pt-1">
      {/* Left Side: Name */}
      <div className="flex items-center pl-5 w-full text-xs">
        {item.isDown ? (
          <>
            <h3 className="text-red-400 font-semibold">{item.name}</h3>
            <ArrowDown size={10} className="ml-1 text-red-400" />
            <h3 className="text-red-400 font-semibold ml-1">{item.percent}</h3>
          </>
        ) : (
          <>
            <h3 className="text-green-400 font-semibold">{item.name}</h3>
            <ArrowUp size={10} className="ml-1 text-green-400" />
            <h3 className="text-green-400 font-semibold ml-1">{item.percent}</h3>
          </>
        )}
      </div>

      {/* Right Side: Buttons (hidden until hover) */}
      <span className="absolute right-4 text-xs flex gap-3 opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        
        {/* Buy */}
        <div className="relative group/button">
          <button className="h-7 bg-green-500 hover:bg-green-600 text-white px-3 rounded-lg transition">B</button>
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-400 text-white text-[10px] px-2 py-[2px] rounded opacity-0 group-hover/button:opacity-100 transition pointer-events-none">
            Buy
          </span>
        </div>

        {/* Sell */}
        <div className="relative group/button">
          <button className="h-7 bg-red-500 hover:bg-red-600 text-white px-3 rounded-lg transition">S</button>
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-400 text-white text-[10px] px-2 py-[2px] rounded opacity-0 group-hover/button:opacity-100 transition pointer-events-none">
            Sell
          </span>
        </div>

        {/* List */}
        <div className="relative group/button">
          <button className="border-2 h-7 bg-white hover:bg-gray-100 text-black px-3 rounded-lg transition">
            <List size={14} />
          </button>
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-400 text-white text-[10px] px-2 py-[2px] rounded opacity-0 group-hover/button:opacity-100 transition pointer-events-none">
            List View
          </span>
        </div>

        {/* Align */}
        <div className="relative group/button">
          <button className="border-2 h-7 bg-white hover:bg-gray-100 text-black px-3 rounded-lg transition">
            <AlignEndHorizontal size={14} />
          </button>
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-400 text-white text-[10px] px-2 py-[2px] rounded opacity-0 group-hover/button:opacity-100 transition pointer-events-none">
            Align
          </span>
        </div>

        {/* More */}
        <div className="relative group/button">
          <button className="border-2 h-7 bg-white hover:bg-gray-100 text-black px-3 rounded-lg transition">
            <Ellipsis size={14} />
          </button>
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-400 text-white text-[10px] px-2 py-[2px] rounded opacity-0 group-hover/button:opacity-100 transition pointer-events-none">
            More
          </span>
        </div>
      </span>
    </div>
  );
};

export default WatchListItem;
