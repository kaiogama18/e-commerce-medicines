function Search() {
  return (
    <form className="flex shadow-lg mb-5 mx-5">
      <button className="material-icons bg-default text-white font-bold py-1 px-2 rounded-l-md">
        search
      </button>
      <input
        className="w-full border border-default bg-gray-200 rounded-r-md p-1"
        type="text"
        required
      />
    </form>
  );
}

export default Search;
