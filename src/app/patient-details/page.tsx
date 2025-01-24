"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

export default function PatientDetailsPage() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    const patient = {
        id,
        name: "Patient Name",
        description: "Patient description",
        avatar: "https://via.placeholder.com/150",
        website: "https://example.com",
        createdAt: "2023-03-06",
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">{patient.name}</h1>
            <div className="flex items-start gap-6">
                <div className="w-40 h-40 overflow-hidden border border-gray-300 rounded-md shadow-sm flex-shrink-0">
                    <img
                        src={patient.avatar}
                        alt={patient.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <p className="text-gray-600 text-sm mb-4">{patient.description}</p>
                    <a
                        href={patient.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                    >
                        {patient.website}
                    </a>
                    <p className="text-gray-500 text-sm mt-4">
                        Created: {new Date(patient.createdAt).toLocaleDateString()}
                    </p>
                </div>
            </div>
        </div>
    );
}
