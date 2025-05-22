export default function Button({ buttonQuery }) {
  const handleClick = (e) => {
    e.preventDefault();
    buttonQuery(e.target.textContent);
  };

  return (
    <div className="flex w-full justify-center items-center gap-2">
      <button
        className="px-3 py-2 bg-blue-900 text-white rounded-lg"
        onClick={handleClick}
      >
        Mountain
      </button>
      <button
        className="px-3 py-2 bg-blue-900 text-white rounded-lg"
        onClick={handleClick}
      >
        Beaches
      </button>
      <button
        className="px-3 py-2 bg-blue-900 text-white rounded-lg"
        onClick={handleClick}
      >
        Birds
      </button>
      <button
        className="px-3 py-2 bg-blue-900 text-white rounded-lg"
        onClick={handleClick}
      >
        Food
      </button>
    </div>
  );
}
