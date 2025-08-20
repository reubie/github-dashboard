"use client";
import React, { useState } from "react";

type UserSearchProps = {
  onSearch: (username: string) => void; //to call when searchng
};

const UserSearch: React.FC<UserSearchProps> = ({ onSearch }) => {
  //state of iput

  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); //preventing page reload
    if (input.trim()) {
      onSearch(input.trim());
    }
  };

  //renders for the search form

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
        />
        <button 
          type="submit"
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default UserSearch;
