import React from "react";

export default function Spinner() {
  return (
    <div className="flex h-screen items-center justify-center space-x-4 bg-gray-100">
      <div className="h-3 w-3 animate-pulse rounded-full bg-yellow-500"></div>
      <div className="h-3 w-3 animate-pulse rounded-full bg-yellow-500"></div>
      <div className="h-3 w-3 animate-pulse rounded-full bg-yellow-500"></div>
    </div>
  );
}
