import React from "react";

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-zinc-900 border border-zinc-800 rounded-xl p-8 w-full max-w-md shadow-2xl">
                {children}

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="mt-6 w-full py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition"
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default Modal;
