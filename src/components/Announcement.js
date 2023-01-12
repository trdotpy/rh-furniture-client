import React from "react";
import { MdLocalShipping, MdPhone } from "react-icons/md";

export default function Announcement() {
  return (
    <div className="hidden items-center justify-center bg-gray-100 py-3 text-center text-xs font-medium text-black md:flex">
      <div className="flex items-center gap-x-2">
        <MdLocalShipping size={20} />
        <p className="uppercase tracking-wide">
          FREE 2-Day Shipping on all orders over $250
        </p>
      </div>
    </div>
  );
}
