import { PatientForm, FormErrors } from "@/types";

export function usePatientValidation() {
    const validatePatient = (form: PatientForm): FormErrors => {
        const errors: FormErrors = {};

        if (!form.name.trim()) {
            errors.name = "Name is required.";
        }

        if (/\d/.test(form.name)) {
            errors.name = "Name cannot contain numbers.";
        }

        if (!form.avatar.trim()) {
            errors.avatar = "Avatar URL is required.";
        }

        if (!form.description.trim()) {
            errors.description = "Description is required.";
        }

        if (!form.website.trim()) {
            errors.website = "Website is required.";
        }

        const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w\-\.~!$&'()*+,;=:@%]*)*(\?[;&a-z\[\]=\+\$,%]*)?(\#[-a-z0-9_]*)?$/i;
        if (form.website && !urlPattern.test(form.website)) {
            errors.website = "Website must be a valid URL.";
        }

        return errors;
    };

    return { validatePatient };
}
