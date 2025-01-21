const PlantInfoPage = (props) => {
  const { plant } = props;

  return (
    <div className="py-24 px-8 bg-emerald-50 text-slate-500 justify-center max-w-6xl">
        <div className="flex flex-col md:flex-row">
            <div className="mr-8 flex-1">
                <img
                src={plant.images?.[0].src}
                className="rounded-xl w-[720px] object-cover"
                />
                <div className="flex">
                    <div className="flex flex-col items-center py-6 px-4">
                        <i className="fa-regular fa-square-check text-emerald-700 text-3xl"></i>
                        <div className="font-bold text-slate-700 text-xl my-1 text-center">Guaranteed Healthy</div>
                        <div className="text-center">Guaranteed to arrive healthy or your money back</div>
                    </div>
                    <div className="border border-slate-300 mt-2"></div>
                    <div className="flex flex-col items-center py-6 px-4">
                        <i className="fa-solid fa-truck-fast text-emerald-700 text-3xl"></i>
                        <div className="font-bold text-slate-700 text-xl my-1 text-center">Free Shipping</div>
                        <div className="text-center">Get free ground shipping on orders of $50 or more</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-1">
                <div className="flex justify-between text-emerald-700 mb-2">
                <div className="font-playfair text-4xl">{plant.name}</div>
                <div className="font-lato text-4xl">${plant.price}</div>
                </div>
                <div className="mb-4 italic text-lg">{plant.botanical_name}</div>
                <div className="text-slate-700">{plant.description}</div>
            </div>
        </div>
    </div>
  );
};

export default PlantInfoPage;
