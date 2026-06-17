import type { Application } from "./Application";

export interface ApplicationFormStepProps {
    formData: Application;
    updateFormData: (field: string, value: string) => void;
}