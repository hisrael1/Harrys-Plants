import { useContext } from "react";
import SessionContext from "contexts/SessionContext";
import { motion } from "framer-motion";

const MobileMenuModal = (props) => {
    const { onCartOpenClick } = props;
    const { username, signOut } = useContext(SessionContext);

    return (
        <motion.div className="bg-emerald-800 rounded-md pr-8 pt-12 pb-6 text-emerald-200 w-56 flex flex-col items-start shadow-md" 
            initial={{translateY: '-100%'}}
            animate={{translateY: 0}}
            transition={{duration: 0.5}}
        >
            <div className="py-4 px-8 flex items-center">
                <i className="fa-solid fa-user mr-2 text-2xl"></i>
                {username}
            </div>
            <button className="py-4 px-8 flex items-center" onClick={signOut}>
                <i className="fa-solid fa-arrow-right-from-bracket mr-2 text-2xl"></i>
                sign out
            </button>
            <button className="py-4 px-8 flex items-center" onClick={onCartOpenClick}>
                <i className="fa-solid fa-cart-shopping mr-2 text-2xl"></i>
                cart
            </button>
        </motion.div>
    )
}

export default MobileMenuModal;