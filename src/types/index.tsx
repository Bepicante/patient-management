import React from "react";

export type Patient = {
    id: string;
    avatar: string;
    createdAt: string;
    description: string;
    name: string;
    website: string;
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