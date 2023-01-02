import React from "react";

export default function Spinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="spinner-grow inline-block h-8 w-8 rounded-full bg-current opacity-0">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
