import * as cartService from "services/cart";

const CartItem = (props) => {
  const { cartItem, idx, fetchCart } = props;

  return (
    <div
      className={`py-8 flex ${idx != 0 && "border-t border-slate-200"}`}
    >
      <img src={cartItem.image_src} className="w-28 rounded-md" />
      <div className="flex justify-between w-full">
        <div className="mx-4">
          <div className="text-xl text-emerald-800 mb-2 font-playfair text-lg">
            {cartItem.plant_name}
          </div>
          <div className="flex mb-2 text-slate-400">
            <div className="w-16 text-slate-500">qty:</div>
            {cartItem.quantity}
          </div>
          <div className="flex mb-2 text-slate-400">
            <div className="w-16 text-slate-500">color:</div>
            {cartItem.pot_color}
          </div>
        </div>
        <div className="flex flex-col justify-between items-end">
            <div className="text-slate-500">${cartItem.quantity * cartItem.price_per_unit}</div>
            <button className="text-sm text-slate-400 hover:text-red-800" onClick={async () => {
                const response = await cartService.deletePlantFromCart({id: cartItem.id});
                const data = await response.json();
                if (response.status == 200) {
                    fetchCart();
                }
            }}
            >
                remove<i className="ml-2 fa-solid fa-trash"></i>
            </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
