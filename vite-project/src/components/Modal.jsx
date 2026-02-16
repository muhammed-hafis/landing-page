import React from "react";

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* Overlay */}
            <div
                className="
        absolute inset-0
        bg-black/40
        dark:bg-black/70
        backdrop-blur-sm
        transition-colors duration-300
      "
                onClick={onClose}
            />

            {/* Modal Content */}
            <div
                className="
        relative w-full max-w-md p-8 rounded-xl shadow-2xl
        bg-white border border-gray-300 text-black
        dark:bg-zinc-900 dark:border-zinc-800 dark:text-white
        transition-colors duration-300
      "
            >
                {children}

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="
          mt-6 w-full py-2 rounded-lg text-white
          bg-gradient-to-r from-pink-500 to-purple-600
          hover:opacity-90 transition
        "
                >
                    Close
                </button>
            </div>

        </div>
    );

}

export default Modal;
