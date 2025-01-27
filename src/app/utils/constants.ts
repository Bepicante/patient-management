import { PatientForm } from "@/types";

export const formInputs = {
    Text: "text",
    TextArea: "textarea",
    File: "file",
    Number: "number",
    Email: "email",
    Password: "password",
    URL: "url",
};

export const formFields: { name: keyof PatientForm; label: string; type: "text" | "file" | "textarea" }[] = [
    { name: "name", label: "Name", type: "text" },
    { name: "avatar", label: "Avatar URL", type: "text" },
    { name: "description", label: "Description", type: "textarea" },
    { name: "website", label: "Website", type: "text" },
];
