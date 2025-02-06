"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";

function Search() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then((response) => {
        console.log(response.data);
        if (response.status == 200) {
          setData(response.data);
          setSearch(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function handleSearch() {
    const filtered = data.filter(
      (user) => user.login.toLowerCase().includes(input.toLowerCase()) // Foydalanuvchi nomini qidirish
    );
    setSearch(filtered);
  }

  return (
    <div className="cont">
      <h1 className="text-2xl mt-[50px] mb-[50px] text-center">
        5. Qidiruv Funktsiyasi (Static Props + Dynamic Route)
      </h1>
      <div className="text-center">
        <label className="text-2xl">Enter dev's username</label>
        <br />
        <br />
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="search"
          className="border-2 border-black  w-[300px] rounded-md text-2xl p-[10px] h-[50px] focus:outline-none"
          placeholder="Enter devs username..."
        />
        <br />
        <br />
        <button
          onClick={handleSearch}
          className="cursor-pointer bg-green-500 text-white p-[10px] rounded-md border-0"
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-[50px] mt-[50px] mb-[50px]">
        {search.length > 0 &&
          search.map(function (value, index) {
            return (
              <div
                key={index}
                className="w-1/4  h-[340px] border-2 text-center rounded-md p-[10px] border-black cursor-pointer"
              >
                <div className="flex w-full justify-center h-[230px] object-cover">
                  <Image
                    src={value.avatar_url}
                    alt={value.login}
                    width={400}
                    className="object-cover"
                    height={230}
                  />
                </div>
                <div className="truncate text-2xl mt-[10px]">
                  <h3>{value.login}</h3>
                </div>
                <div className="w-[1/3] truncate">
                  <p>{value.type}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Search;
