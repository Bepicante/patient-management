import {SearchInputProps} from "@/types";
import React from "react";

export function SearchInput({value, onChange}: SearchInputProps) {
    return (
        <input
            type="text"
            placeholder="Search by name..."
            value={value}
            onChange={onChange}
            className="border border-gray-300 rounded-lg p-2 shadow-md w-80"
        />
    );
}
