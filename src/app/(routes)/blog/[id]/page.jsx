"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";

function BlogD() {
  const [info, setInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          setInfo(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!info) {
    return <p className="text-center text-5xl">Yuklanmoqda...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center">
        <div className="flex-shrink-0 w-full md:w-1/2">
          {info.image ? (
            <Image
              src={info.image}
              width={400}
              height={400}
              alt={info.title || "Mahsulot rasmi"}
              className="object-cover"
            />
          ) : (
            <p>Rasm mavjud emas</p>
          )}
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <h1 className="text-3xl font-semibold">{info.title}</h1>
          <p className="text-xl text-gray-700 my-4">{info.description}</p>
          <p className="text-lg font-semibold">Narxi: ${info.price}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogD;
