import data from "../stock.json";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Stock() {
  const [keyword, setKeyword] = useState("");
  const [hasilFilter, setHasilfilter] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handlefilter = (e) => {
    const filterData = data.filter((e) => {
      return e.category.toLowerCase().includes(keyword.toLowerCase());
    });
    setHasilfilter(filterData);
  };
  console.log(keyword);

  useEffect(() => {
    handlefilter();
  }, [data, keyword]);

  function getFiltered(filtered) {
    if (filtered === 0) {
      return "Barang Tidak Ada";
    } else {
      return filtered + " Products ";
    }
  }

  return (
    <>
      <div className="p-7 text-black z-[2] mt-8">
        <h1 className="text-3xl font-bold text-center">Products</h1>
      </div>
      <div className="w-full">
        <Link href="/favorite" className="bg-[#d3829f] text-white p-4 rounded-lg md:ml-[1327px] ml-[260px] hover:transition-[0.4s] hover:shadow-[0_7px_30px_0_rgba(0,0,0,0.4)] hover:z-[3] hover:scale-110">See More
      </Link>

      </div>
      <div className="templateContainer mb-20">
        <div className="template_Container items-center justify-center grid relative grid-cols-[repeat(4,1fr)] mx-auto my-0 px-[5%] p-[2%] ">
          {hasilFilter.length > 0
            ? hasilFilter
                .filter((products) =>
                  searchTerm !== ""
                    ? products.name.toLowerCase().includes(searchTerm)
                    : products
                )
                .map((item) => (
                    <div className="template bg-white border justify-center items-center m-5 p-5 rounded-[10px] border-solid border-[#a7a7a7] hover:transition-[0.4s] hover:shadow-[0_10px_40px_0_rgba(0,0,0,0.4)] hover:z-[3] hover:scale-110">
                      <Image
                      width={1000}
                      height={1000}
                        key={item.id}
                        src={item.image}
                        alt=""
                        className="h-[200px] w-[400px] border mt-[5px] mb-5 mx-1 rounded-[10px] border-solid border-black"
                      />
                      <h3 className="card-name font-bold mb-3">{item.name}</h3>
                      <p className="card-text ">{item.description}</p>
                      <div className="flex flex-row gap-28 mt-4">
                      <p className="price font-semibold mt-3">
                        Rp. {item.price}
                      </p>
                      <Link
                          href={`/${item.id}`}
                          key={item.id}
                          className="bg-[#d3829f] p-2 w-16 h-10 text-center rounded text-white"
                        >
                          Detail
                        </Link>
                    </div>
                    </div>
                ))
            : data
                .filter((val) => {
                  if (searchTerm == "") {
                    return val;
                  } else if (
                    val.name.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((val) => {
                  return (
                    <div className="template" key={val.id}>
                      <Image src={val.image} alt="" width={100} height={100}/>
                      <h3 className="card-name">{val.name}</h3>
                      <p className="card-text">{val.description}</p>
                      <p className="price">Rp {val.price}</p>
                    </div>
                  );
                })}
        </div>
      </div>
    </>
  );
}

export default Stock;