import { useState } from "react";
import "./Searchbar.css";

export default function Searchbar({ setSearchInput }) {
  const [input, setInput] = useState("");
  
  return (
    <div className='searchbar-wrapper'>
      <input 
        className='search-input'
        placeholder='You are currently seeing my favorite movies! Search for yours here...'
        type="text" 
        value={input} 
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
