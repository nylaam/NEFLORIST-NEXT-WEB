// import data from "../data.json";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";


function Favorite() {
  const [keyword, setKeyword] = useState("");
  const [hasilFilter, setHasilfilter] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [data, setData] = useState([])

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

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://api.jsonbin.io/v3/b/640ed38cebd26539d08dbb9b");
        const data = await response.json();
        setData(data.record);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);


  return (
    <>
      <div className="p-7 text-black z-[2] mt-20">
        <h1 className="text-3xl font-bold  text-center">Products</h1>
      </div>

      <div className="templateContainer">
        <div className="searchInput_Container flex items-center justify-center mx-auto my-0">
          <input
            className="border w-3/12 p-2.5 rounded-[10px] border-solid border-black"
            id="searchInput"
            type="text "
            placeholder="Search Here"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />

          <div className="filter-area">
            <form onChange={handlefilter}>
              <select
                className="filter border h-[45px] w-[110px] mx-2.5 my-0 rounded-[10px] border-solid border-black"
                name="isAvailable"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              >
                <option value="">All</option>
                <option value="Bouquet">Bouquet</option>
                <option value="Unit">Unit</option>
              </select>
            </form>
          </div>
        </div>

        <div className="information w-1/5 text-center mx-auto my-0 pt-2.5">
          {getFiltered(hasilFilter.length)}
        </div>

        <div className="template_Container items-center justify-center grid relative grid-cols-[repeat(4,1fr)] mx-auto my-0 px-[5%] p-[2%] ">
          {hasilFilter.length > 0
            ? hasilFilter
                .filter((products) =>
                  searchTerm !== ""
                    ? products.name.toLowerCase().includes(searchTerm)
                    : products
                )
                .map((item, index) => (
                  <div key={index}>
                    <div className="template bg-white border justify-center items-center m-5 p-5 rounded-[10px] border-solid border-[#a7a7a7] hover:transition-[0.4s] hover:shadow-[0_10px_40px_0_rgba(0,0,0,0.4)] hover:z-[3] hover:scale-110">
                      <Image
                      width={1000}
                      height={1000}
                        src={item.image}
                        alt=""
                        className="h-[200px] w-[200px] mb-5 mx-7 rounded-[10px]"
                      />
                      <h3 class="card-name font-bold mb-3">{item.name}</h3>
                      <p class="card-text ">{item.description}</p>
                      <div className="flex flex-row gap-28 mt-4">
                        <p className="price font-semibold my-3">
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
                      <h3 class="card-name">{val.name}</h3>
                      <p class="card-text">{val.description}</p>
                      <p className="price">Rp {val.price}</p>
                    </div>
                  );
                })}
        </div>
      </div>
    </>
  );
}

export default Favorite;
