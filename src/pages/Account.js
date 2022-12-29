import React from "react";

export default function Account() {
  return (
    <div className="rounded-lg bg-white px-28 py-8 shadow-lg">
      <h2 className="mb-4 text-2xl font-bold">Account Details</h2>
      <div className="mb-4">
        <label className="mb-2 block font-bold text-gray-700">Name</label>
        <span className="block text-gray-600">Username</span>
      </div>
      <div className="mb-4">
        <label className="mb-2 block font-bold text-gray-700">Email</label>
        <span className="block text-gray-600">Email</span>
      </div>
      <div className="mb-4">
        <label className="mb-2 block font-bold text-gray-700">
          Order History
        </label>
        <span className="block text-gray-600">
          <ul>
            <li>Order #1</li>
          </ul>
        </span>
      </div>
      <div className="grid grid-cols-1">
        <button>Delete Account</button>
        <button>Log Out</button>
      </div>
    </div>
  );
}
