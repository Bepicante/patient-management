"use client";

import React, {useState} from "react";
import EditPatientDialog from "./EditPatientDialog";
import {Patient, PatientCardProps} from "@/types";

export default function PatientCard({patient, onUpdateAction}: PatientCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const toggleDetails = () => {
        setIsExpanded(!isExpanded);
    };

    const handleSave = (updatedPatient: Patient) => {
        onUpdateAction(patient.id, updatedPatient);
        setIsEditing(false);
    };

    const renderImage = (avatar: string | undefined) => {
        return avatar ? (
            <img
                src={avatar}
                alt={patient.name}
                className="w-full h-full object-cover"
            />
        ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">No Image</span>
            </div>
        );
    };

    return (
        <div
            className="border border-gray-300 rounded-lg shadow-xl p-6 bg-white max-w-4xl mx-auto mb-6 flex flex-col justify-between transition-all duration-300"
            style={{minHeight: "300px", maxHeight: isExpanded ? "450px" : "300px"}}
        >
            <div>
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-blue-500">{patient.name || "N/A"}</h2>
                    <button
                        onClick={toggleDetails}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
                        title={isExpanded ? "Collapse" : "Expand"}
                    >
                        {isExpanded ? (
                            <span className="text-lg font-bold">−</span>
                        ) : (
                            <span className="text-lg font-bold">+</span>
                        )}
                    </button>
                </div>
                <div className="flex items-start gap-6 mt-4">
                    <div
                        className="w-40 h-40 overflow-hidden border border-gray-300 rounded-md shadow-sm flex-shrink-0">
                        {renderImage(patient.avatar)}
                    </div>
                    <div className="flex-1">
                        <a
                            href={patient.website || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline mb-4 inline-block"
                        >
                            {patient.website || "No website"}
                        </a>
                        <p className="text-gray-500 text-sm">
                            Created: {new Date(patient.createdAt).toLocaleDateString()}
                        </p>
                        <button
                            onClick={() => setIsEditing(true)}
                            className="mt-4 px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-600 transition"
                        >
                            Edit
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={`overflow-hidden transition-all duration-300`}
                style={{
                    height: isExpanded ? "150px" : "0",
                }}
            >
                <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 text-blue-500">Description</h3>
                    <p className="text-gray-700 text-sm">
                        {patient.description || "No description available"}
                    </p>
                </div>
            </div>
            {isEditing && (
                <EditPatientDialog
                    patient={patient}
                    onCloseAction={() => setIsEditing(false)}
                    onSaveAction={handleSave}
                />
            )}
        </div>
    );
}
