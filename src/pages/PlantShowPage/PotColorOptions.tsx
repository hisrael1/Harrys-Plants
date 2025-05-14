import { useState } from "react";
import { POT_COLORS } from "shared/util";
import * as cartService from "services/cart";
import type { Plant } from "./types";

interface PotColorOptionsProps {
  plant: Plant;
  currentImgIdx: number;
  setCurrentImgIdx: React.Dispatch<React.SetStateAction<number>>;
}

const PotColorOptions = (props: PotColorOptionsProps) => {
  const { plant, currentImgIdx, setCurrentImgIdx } = props;
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="mt-10">
      <div className="text-emerald-700 flex items-center text-xl">
        <i className="fa-solid fa-brush text-2xl mr-2"></i>
        Pot color
      </div>
      <div className="flex my-4 flex-wrap">
        {plant.images.map((img, idx) => (
          <div
            key={img.pot_color}
            className="flex flex-col items-center mx-2"
            onMouseEnter={() => setCurrentImgIdx(idx)}
          >
            <div
              className={`w-8 h-8 rounded-full ${POT_COLORS[img.pot_color]} ${
                currentImgIdx == idx && "outline outline-2 outline-offset-4"
              } border border-slate-300 mb-1`}
            ></div>
            <div
              className={
                currentImgIdx == idx ? "text-slate-700" : "text-slate-500"
              }
            >
              {img.pot_color}
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-10">
        <div className="flex items-center border border-slate-400 rounded-full text-3xl">
          <div
            className="p-1 pl-4 cursor-pointer"
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            <i className="fa-solid fa-minus text-2xl"></i>
          </div>
          <input
            className="w-6 text-center bg-emerald-50 text-2xl"
            value={quantity}
            type="text"
          />
          <div
            className="p-1 pr-4 cursor-pointer"
            onClick={() => setQuantity(quantity + 1)}
          >
            <i className="fa-solid fa-plus text-2xl"></i>
          </div>
        </div>
        <button
          className="w-full ml-4 px-4 flex justify-center items-center bg-emerald-700 text-emerald-50 flex-1 rounded-full hover:bg-emerald-800"
          onClick={async () => {
            setIsLoading(true);
            await cartService.addPlantToCart({
              id: plant.id,
              pot_color: plant.images[currentImgIdx].pot_color,
              quantity,
            });
            setIsLoading(false);
          }}
        >
          {isLoading ? (
            <i className="fa-solid fa-spinner animate-spin text-2xl mr-2"></i>
          ) : (
            <i className="fa-solid fa-cart-shopping text-2xl mr-2"></i>
          )}
          add to cart
        </button>
      </div>
    </div>
  );
};

export default PotColorOptions;
