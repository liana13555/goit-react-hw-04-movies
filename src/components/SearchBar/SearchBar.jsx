import { Button } from './SearchBar.styled';

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
        <Button type="submit">
          <span>Search</span>
        </Button>
      </form>
    </div>
  );
}
