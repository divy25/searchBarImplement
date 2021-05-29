import React, { useState } from 'react';
import logo from './star-wars-logo.png';
import './index.css';
import { SearchBar } from './SearchBar';

function HomePage() {
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="Star Wars Logo" />
      </div>
      <SearchBar/>
      <input className="search-input" placeholder="Search by name" />
    </div>
  );
}

export default HomePage;
