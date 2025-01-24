"use client";

import { useState } from "react";
import { usePatients } from "@/hooks/usePatients";
import PatientCard from "@/components/PatientCard";
import AddPatientForm from "@/components/AddPatientForm";
import { ActionButton } from "@/components/ui/Buttons";
import { SearchInput } from "@/components/ui/SearchInput";
import LoadingWrapper from "@/components/ui/LoadingWrapper";
import Snackbar from "@/components/ui/Snackbar";
import {SnackbarMessage} from "@/types";

export default function PatientList() {
    const { patients, setPatients, loading } = usePatients();
    const [filter, setFilter] = useState("");
    const [isAdding, setIsAdding] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState<SnackbarMessage | null>(null);

    const handleUpdatePatient = (id, updatedPatient) => {
        try {
            setPatients((prev) =>
                prev.map((patient) =>
                    patient.id === id ? { ...patient, ...updatedPatient } : patient
                )
            );
            setSnackbarMessage({ message: "Patient edited successfully.", type: "success" });
        } catch (error) {
            setSnackbarMessage({ message: "Error updating patient.", type: "error" });
        }
    };

    const handleAddPatient = (newPatient) => {
        try {
            setPatients((prev) => [newPatient, ...prev]);
            setSnackbarMessage({ message: "Patient added successfully.", type: "success" });
            setIsAdding(false);
        } catch (error) {
            setSnackbarMessage({ message: "Error adding patient.", type: "error" });
        }
    };

    const handleError = (message) => {
        setSnackbarMessage({ message, type: "error" });
    };

    const filteredPatients = patients.filter((patient) =>
        patient.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <LoadingWrapper isLoading={loading}>
            <div className="p-6 m-15">
                <h1 className="text-4xl font-bold mb-4 mt-6 text-center text-blue-500">
                    Patient Records
                </h1>
                <div className="mb-6 flex justify-center">
                    <ActionButton
                        onClick={() => setIsAdding(true)}
                        children={"Add New Patient"}
                    />
                </div>
                <div className="mb-6 flex justify-center">
                    <SearchInput value={filter} onChange={(e) => setFilter(e.target.value)} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-6 mx-10">
                    {filteredPatients.map((patient) => (
                        <PatientCard
                            key={patient.id}
                            patient={patient}
                            onUpdate={handleUpdatePatient}
                        />
                    ))}
                </div>
                {isAdding && (
                    <AddPatientForm
                        onAdd={handleAddPatient}
                        onCancel={() => setIsAdding(false)}
                        onError={handleError}
                    />
                )}
                {snackbarMessage && (
                    <Snackbar
                        message={snackbarMessage.message}
                        type={snackbarMessage.type}
                        duration={3000}
                        onClose={() => setSnackbarMessage(null)}
                    />
                )}
            </div>
        </LoadingWrapper>
    );
}
