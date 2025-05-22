import { useEffect, useState } from "react";

export default function PhotoContainer({ photoQuery }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.pexels.com/v1/search?query=${photoQuery.toLowerCase()}&per_page=16`,
          {
            headers: {
              Authorization:
                "BtfniS9wptkkigHxvvqHhgRK1llKBWvB03mbxXuSePiN0AGQ5FJ9JM5y",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const info = await response.json();
        setData(info.photos);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  });

  return (
    <div className="w-full grid grid-cols-4 gap-y-2 max-w-[80%] place-self-center mb-[50px]">
      {data.map((photo) => (
        <div className="w-[250px]">
          <img className="w-fit" key={photo.id} src={photo.src.medium} alt="" />
        </div>
      ))}
    </div>
  );
}
