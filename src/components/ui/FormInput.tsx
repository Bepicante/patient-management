"use client";

import React from "react";
import {formInputs} from "@/app/utils/constants";
import {FormInputProps} from "@/types";

const baseClasses = `border p-2 rounded-lg w-full`;

export default function FormInput({label, name, value, onChangeAction, error, type}: FormInputProps) {
    const errorClasses = error ? "border-red-500" : "border-gray-300";

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-blue-500">{label}</label>
            {type === formInputs.TextArea && (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChangeAction}
                    className={`${baseClasses} ${errorClasses}`}
                ></textarea>
            )}
            {type === formInputs.File && (
                <input
                    type="file"
                    name={name}
                    onChange={onChangeAction}
                    className={`${baseClasses} ${errorClasses}`}
                />
            )}
            {type !== formInputs.TextArea && type !== formInputs.File && (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChangeAction}
                    className={`${baseClasses} ${errorClasses}`}
                />
            )}
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
}
