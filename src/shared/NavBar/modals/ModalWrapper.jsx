import { RemoveScroll } from "react-remove-scroll"
import { useRef } from "react";

const ModalWrapper = (props) => {
    const { children, isOpen, onCloseClick } = props;
    const backgroundDivRef = useRef();

    if (!isOpen) {
        return null
    }

    return (
        <RemoveScroll>
            <div className="fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm flex justify-end font-lato items-start"
                ref={backgroundDivRef}
                onClick={(e) => {
                    if (e.target === backgroundDivRef.current) {
                        onCloseClick()
                    }
                }}
            >
                <button className=" z-10 absolute right-0 top-0 p-2 text-4xl text-emerald-600" onClick={onCloseClick}>
                    <i className="fa-solid fa-circle-xmark"></i>
                </button>
                {children}
            </div>
        </RemoveScroll>
    )
}

export default ModalWrapper;