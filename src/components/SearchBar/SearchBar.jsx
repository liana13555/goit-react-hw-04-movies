import { Button } from './SearchBar.styled';

export default function SearchBar({ onSearch }) {
  const handleSearch = e => {
    e.preventDefault();
    const target = e.target.elements.searchName.value.toLowerCase();
    if (target.trim() === '') {
      return "The search field is empty!";
    }
    onSearch(target);
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
