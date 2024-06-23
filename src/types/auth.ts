import { ReactNode } from "react";
import { SubmitHandler } from "react-hook-form";

export type InnerLayoutProps = {
    title: string;
    description?: string;
    linkText: string;
    cta: string;
    children: ReactNode;
}

export type FormSchema = {
    fullName?: string;
    email: string;
    companyName?: string;
    password: string;
    confirmPassword?: string;
}


export type FormProps = {
    submitHandler: SubmitHandler<FormSchema>;
    fullName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    isSubmitting: boolean;
    btnText: string;
}