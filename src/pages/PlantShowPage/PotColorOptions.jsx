import { useState } from "react";
import { POT_COLORS } from "shared/util";
import * as plantService from "services/plants";

const PotColorOptions = (props) => {
    const { plant, currentImgIdx, setCurrentImgIdx } = props;
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="mt-10">
            <div className="text-emerald-700 flex items-center text-xl">
                <i className="fa-solid fa-brush text-2xl mr-2"></i>
                Pot color
            </div>
            <div className="flex my-4">
                {plant.images.map((img, idx) => (
                    <div key={img.pot_color} className="flex flex-col items-center mr-6"
                    onMouseEnter={() => setCurrentImgIdx(idx)}
                    >
                        <div className={`w-12 h-12 rounded-full ${POT_COLORS[img.pot_color]} ${(currentImgIdx == idx) && 'outline outline-2 outline-offset-4'} border border-slate-300 mb-1`}>
                        </div>
                        <div className={currentImgIdx == idx ? 'text-slate-700' : 'text-slate-500'}>{img.pot_color}</div>
                    </div>
                ))}
            </div>
            <div className="flex mt-10">
                <div className="flex border border-slate-400 rounded-full text-3xl">
                    <div className="p-1 pl-4 cursor-pointer" onClick={() => {
                        if (quantity > 1) {
                            setQuantity(quantity - 1)
                        }
                    }}>-</div>
                    <input className="w-6 text-center bg-emerald-50 text-2xl" value={quantity} type="text"/>
                    <div className="p-1 pr-4 cursor-pointer" onClick={() => setQuantity(quantity + 1)}>+</div>
                </div>
                    <button className="w-full mx-4 flex justify-center items-center bg-emerald-700 text-emerald-50 flex-1 rounded-full"
                        onClick={async () => {
                            const response = await plantService.addPlantToCart({
                                id: plant.id,
                                pot_color: plant.images[currentImgIdx].pot_color,
                                quantity,
                            })
                            const data = await response.json();
                        }}
                    >
                        <i className="fa-solid fa-cart-shopping text-2xl mr-2"></i>
                        add to cart
                    </button>
            </div>
        </div>
    )
}

export default PotColorOptions;