export const formInputs = {
    Text: "text",
    TextArea: "textarea",
    File: "file",
    Number: "number",
    Email: "email",
    Password: "password",
    URL: "url",
};

export const formFields = [
    { label: "Name", name: "name", type: formInputs.Text },
    { label: "Avatar URL", name: "avatar", type: formInputs.Text },
    { label: "Description", name: "description", type: formInputs.TextArea, rows: 4 },
    { label: "Website", name: "website", type: formInputs.URL },
];
