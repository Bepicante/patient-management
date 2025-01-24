export function usePatientValidation() {
    const validatePatient = (form: {
        name: string;
        avatar: string;
        description: string;
        website: string;
    }) => {
        const errors: Record<string, string> = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!form.name.trim()) errors.name = "Name is required.";
        if (/\d/.test(form.name)) errors.name = "Name cannot contain numbers.";
        if (!form.avatar.trim()) errors.avatar = "Avatar URL is required.";
        if (!form.description.trim())
            errors.description = "Description is required.";
        if (!form.website.trim()) errors.website = "Website is required.";
        if (!emailRegex.test(form.website))
            errors.website = "Website must be a valid email format.";

        return errors;
    };

    return { validatePatient };
}
