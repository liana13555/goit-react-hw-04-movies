
export default function SearchBar({ onSearch }) {
  const handleSearch = e => {
    e.preventDefault();
    if (e.target.elements.searchName.value.toLowerCase().trim() === '') {
    
    }
    onSearch(e.target.elements.searchName.value.toLowerCase());
    e.target.reset()
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          name="searchName"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter movie name"
         
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </div>
  );
}
