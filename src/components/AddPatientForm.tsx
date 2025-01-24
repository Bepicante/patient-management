"use client";

import React, { useState, useEffect } from "react";
import { FormErrors, PatientForm } from "@/types";
import { CancelButton, SaveButton } from "@/components/ui/Buttons";
import FormInput from "@/components/ui/FormInput";
import { formFields } from "@/app/utils/constants";

export default function AddPatientForm({ onAdd, onCancel, onError }) {
    const [form, setForm] = useState<PatientForm>({
        avatar: "",
        description: "",
        name: "",
        website: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        return () => setIsVisible(false);
    }, []);

    const validateForm = () => {
        const newErrors: FormErrors = {};

        if (!form.name.trim() || /\d/.test(form.name))
            newErrors.name = "Name is required and cannot contain numbers.";
        if (!form.avatar.trim()) newErrors.avatar = "Avatar URL is required.";
        if (!form.description.trim()) newErrors.description = "Description is required.";
        if (!form.website.trim() || !/^https?:\/\/[\w.-]+$/.test(form.website))
            newErrors.website = "A valid website URL is required.";
        return newErrors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            onError("Please fix the highlighted errors before proceeding.");
            return;
        }
        onAdd({ ...form, id: Date.now().toString() });
        closeDialog();
    };

    const closeDialog = () => {
        setIsVisible(false);
        setTimeout(() => {
            onCancel();
        }, 300);
    };

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
            <div
                className={`bg-white p-6 rounded-lg shadow-lg w-[600px] max-w-[90%] transform transition-transform duration-300 ${
                    isVisible ? "scale-100" : "scale-90"
                }`}
            >
                <h2 className="text-2xl font-bold mb-4 text-center text-blue-500">
                    Add New Patient
                </h2>
                {formFields.map((field) => (
                    <FormInput
                        key={field.name}
                        label={field.label}
                        name={field.name}
                        value={form[field.name]}
                        onChange={handleChange}
                        error={errors[field.name]}
                        type={field.type}
                    />
                ))}
                <div className="flex justify-end gap-4">
                    <CancelButton onClick={closeDialog}>Cancel</CancelButton>
                    <SaveButton onClick={handleSubmit}>Add Patient</SaveButton>
                </div>
            </div>
        </div>
    );
}
