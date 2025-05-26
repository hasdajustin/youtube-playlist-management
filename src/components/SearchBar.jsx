import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.trim()) {
      onSearch(term);
      setTerm('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3 d-flex">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Search YouTube..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
