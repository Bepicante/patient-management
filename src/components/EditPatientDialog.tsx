"use client";

import React, {useState, useEffect} from "react";
import {CancelButton, SaveButton} from "@/components/ui/Buttons";
import {EditPatientDialogProps, Patient} from "@/types";

export default function EditPatientDialog({patient, onCloseAction, onSaveAction}: EditPatientDialogProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        return () => setIsVisible(false);
    }, []);

    const [form, setForm] = useState({
        name: patient.name || "",
        avatar: patient.avatar || "",
        description: patient.description || "",
        website: patient.website || "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = () => {
        const newPatient: Patient = {
            ...form,
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
        };
        onSaveAction(newPatient);
        setIsVisible(false);
        setTimeout(onCloseAction, 300);
    };

    const handleCancel = () => {
        setIsVisible(false);
        setTimeout(onCloseAction, 300);
    };

    return (
        <div
            className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
            <div
                className={`bg-white p-8 rounded-lg shadow-2xl transition-transform duration-300 ${isVisible ? "scale-100" : "scale-90"}`}
                style={{
                    width: "90%",
                    maxWidth: "800px",
                    maxHeight: "90vh",
                    overflowY: "auto",
                }}
            >
                <h2 className="text-3xl font-bold mb-6 text-blue-500 text-center">Edit Patient</h2>
                <div className="mb-6">
                    <label className="block text-lg font-medium text-blue-500">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-lg font-medium text-blue-500">Avatar URL</label>
                    <input
                        type="text"
                        name="avatar"
                        value={form.avatar}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-lg font-medium text-blue-500">Description</label>
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full"
                        rows={6}
                    ></textarea>
                </div>
                <div className="mb-6">
                    <label className="block text-lg font-medium text-blue-500">Website</label>
                    <input
                        type="text"
                        name="website"
                        value={form.website}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full"
                    />
                </div>
                <div className="flex justify-end gap-4">
                    <CancelButton onClick={handleCancel}>Cancel</CancelButton>
                    <SaveButton onClick={handleSubmit}>Save</SaveButton>
                </div>
            </div>
        </div>
    );
}
