import React from "react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl font-bold mb-4 px-4 animate-bounce">  🍿 404 - Movie Not Found</h1>
      <p className="mb-4">The movie you are looking for does not exist.</p>
      <Link
        to="/"
        className="px-4 py-2 bg-red-500 rounded hover:bg-red-600"
      >
        Back to Home
      </Link>
    </div>
  );
}
