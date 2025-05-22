export default function CategoryTitle({ searchTerm }) {
  const capitalizeWord = (word) => {
    return `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`;
  };

  return (
    <div className="flex justify-center w-full my-[30px]">
      <h2 className="text-[24px] text-blue-800 font-semibold">
        {capitalizeWord(searchTerm)} Pictures
      </h2>
    </div>
  );
}
