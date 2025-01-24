import React from "react";
import {ButtonProps} from "@/types";

export const CancelButton: React.FC<ButtonProps> = ({ onClick, children }) => (
    <button
        onClick={onClick}
        className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
    >
        {children || "Cancel"}
    </button>
);

export const SaveButton: React.FC<ButtonProps> = ({ onClick, children }) => (
    <button
        onClick={onClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
    >
        {children || "Save"}
    </button>
);

export const ActionButton: React.FC<ButtonProps> = ({ onClick, children }) => (
    <button
        onClick={onClick}
        className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition"
    >
        {children}
    </button>
);
