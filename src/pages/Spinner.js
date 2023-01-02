import React from "react";

export default function Spinner() {
  return (
    <div className="flex h-screen items-center justify-center space-x-4">
      <div className="h-2 w-2 animate-pulse rounded-full bg-blue-400"></div>
      <div className="h-2 w-2 animate-pulse rounded-full bg-blue-400"></div>
      <div className="h-2 w-2 animate-pulse rounded-full bg-blue-400"></div>
    </div>
  );
}
