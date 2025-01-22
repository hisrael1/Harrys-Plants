import { POT_COLORS } from "shared/util";

const PotColorOptions = (props) => {
    const { plant, currentImgIdx, setCurrentImgIdx } = props;

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
        </div>
    )
}

export default PotColorOptions;