import Image from "next/image";
import { useRouter } from "next/router";
import React, {useEffect, useState, useRef} from "react";
import data from "../../data";
import { Plus } from "../../components/Plus";
import { Minus } from "../../components/Minus";

function getItems(id) {
  const item = data.find((e) => e.id === Number(id));
  if (typeof item === "object") {
    return item;
  }
  return {};
}

function Detail() {
  const router = useRouter();
  const { slug } = router.query;
  const barang = getItems(slug);
  console.log(data);
  if (Object.keys(barang).length === 1) {
    return <div>Item not found</div>;
  }

  // const { cartCount, addItem } = useShoppingCart();
  const [qty, setQty] = useState(1);
  const [adding, setAdding] = useState(false);

  // const toastId = useRef();
  // const firstRun = useRef(true);

  const handleOnAddToCart = () => {
    setAdding(true);
    toastId.current = toast.loading(
      `Adding ${qty} item${qty > 1 ? 's' : ''}...`
    );
    addItem(props, qty);
  };

  return (
    <main className="mt-[200px]">
      <div className="h-screen flex justify-center items-center bg-cream">
        <div className="px-4 sm:px-0 w-[375px] sm:w-[600px] flex flex-col sm:grid sm:grid-cols-2">
          {/* TODO: Use Next Image to make images optimize in <picture></picture> HTML element */}
          <div>
            <picture>
              <source
                className=""
                srcSet="/gelas 1.jpg"
                media="(max-width: 639px)"
                type="image/png"
              />
              <img
                className="rounded-tl-xl rounded-tr-xl sm:rounded-bl-xl sm:rounded-r-none"
                src={barang.image}
                alt={barang.name}
              />
            </picture>
          </div>

          <div className="flex flex-col bg-white p-6 sm:p-7 rounded-bl-xl rounded-br-xl sm:rounded-l-none sm:rounded-tr-xl sm:rounded-br-xl">
            <span className="uppercase tracking-[0.35em] text-xs text-darkGrayishBlue font-montserrat">
              {barang.category}
            </span>
            <h1 className="mt-2 sm:mt-6 text-[32px] sm:text-[33px] leading-8 text-veryDarkBlue font-fraunces font-bold">
              {barang.name}
            </h1>
            <p className="mt-4 sm:mt-8 text-sm text-darkGrayishBlue font-montserrat">
              {barang.description}
            </p>
            <div className="mt-6 sm:mt-8 flex items-center space-x-5">
              <p className="font-fraunces text-3xl text-darkCyan">
                Rp. {barang.price}
              </p>
            </div>

            <div className="mt-4 border-t pt-4">
              <p className="text-gray-500">Quantity:</p>
              <div className="mt-1 flex items-center space-x-3">
                <button
                  onClick={() => setQty(prev => prev - 1)}
                  disabled={qty <= 1}
                  className="disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-current hover:bg-rose-100 hover:text-rose-500 rounded-md p-1 border-0"
                >
                  <Minus />
                </button>
                <p className="font-semibold text-xl">{qty}</p>
                <button
                  onClick={() => setQty(prev => prev + 1)}
                  className="hover:bg-green-100 hover:text-green-500 rounded-md p-1 border-0"
                >
                  <Plus />
                </button>
              </div>
            </div>

            <button type="button"
                onClick={handleOnAddToCart}
                disabled={adding} className="mt-4 sm:mt-6 flex space-x-2 justify-center items-center py-4 w-full text-xs text-white font-montserrat font-bold bg-black hover:bg-veryDarkBlue transition ease-in-out delay-75 rounded-lg">
              <Image
                src="/icon-cart.svg"
                width={15}
                height={16}
                alt="Cart Icon"
              />
              <span>Add to Cart ({qty})</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Detail;