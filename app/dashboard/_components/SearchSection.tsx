import { Search } from 'lucide-react';

function SearchSection({ onSearchInput }: any) {
  return (
    <div className="p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 flex justify-center items-center text-white flex-col">
      <h2 className="text-3xl font-bold">Browse All Templates</h2>
      <p>What would you like to create today?</p>
      <div className="w-full flex justify-center items-center">
        <div className="flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[50%]">
          <Search className="text-primary" />
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => onSearchInput(e.target.value)}
            className="outline-none bg-white rounded-md p-2 bg-transparent text-black"
          />
        </div>
      </div>
    </div>
  );
}
export default SearchSection;
