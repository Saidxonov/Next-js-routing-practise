"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function API() {
  const [data, setData] = useState([]);
  const router = useRouter();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        if (response.status == 200) {
          setData(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleRedirect(id) {
    console.log(id);
    router.push(`/api/${id}`, { state: id });
  }

  return (
    <>
      <h1 className="text-2xl mt-[50px] mb-[50px] text-center">
        1. Mahsulot Katalogi (API bilan ishlash)
      </h1>
      <div className="cont">
        <div className="flex flex-wrap justify-center gap-[50px] mb-[50px]">
          {data.length > 0 &&
            data.map(function (value, index) {
              return (
                <div
                  key={index}
                  onClick={() => handleRedirect(value.id)}
                  className="w-1/4  h-[340px] border-2 text-center rounded-md p-[10px] border-black cursor-pointer"
                >
                  <div className="flex w-full justify-center object-cover">
                    <Image
                      width={150}
                      height={300}
                      src={value.image}
                      alt={`${value.title}`}
                    />
                  </div>
                  <div className="truncate text-2xl mt-[10px]">
                    <h3>{value.title}</h3>
                  </div>
                  <div className="w-[1/3] truncate">
                    <p>${value.price}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default API;
