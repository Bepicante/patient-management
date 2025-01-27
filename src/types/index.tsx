import React from "react";

export interface Patient {
    id: string;
    name: string;
    avatar: string;
    website: string;
    createdAt: string;
    description: string;
}

export type PatientCardProps = {
    patient: Patient;
    onUpdateAction: (id: string, updatedPatient: Patient) => void;
};

export type PatientForm = Omit<Patient, "id" | "createdAt">;

export type FormErrors = Partial<PatientForm>;

export type ButtonProps = {
    onClick: () => void;
    children: React.ReactNode;
};

export type SnackbarMessage = {
    message: string;
    type: "success" | "error";
};

export type EditPatientDialogProps = {
    patient: Patient;
    onCloseAction: () => void;
    onSaveAction: (updatedPatient: Patient) => void;
};

export type AddPatientFormProps = {
    onAddAction: (patient: PatientForm) => void;
    onCancelAction: () => void;
    onErrorAction: (message: string) => void;
};

export interface FormInputProps {
    label: string;
    name: keyof PatientForm;
    value: string | number;
    onChangeAction: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    error?: string;
    type: "text" | "file" | "textarea";
}

export interface SearchInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SnackbarProps {
    message: string;
    onCloseAction: () => void;
    duration: number;
    type: "success" | "error";
}