import { useState } from "react";

export default function Searchbar({ setSearchInput }) {
  const [input, setInput] = useState("");
  
  return (
    <div className='searchbar-wrapper'>
      <input 
        className='search-input'
        type="text" 
        value={input.toUpperCase()} 
        onChange={(e) => setInput(e.target.value)} />
      <button
        className='search-btn'
        onClick={() => setSearchInput(input)}
      >
        Search
      </button>
    </div>
  );
};
