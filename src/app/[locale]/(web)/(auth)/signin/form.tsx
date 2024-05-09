'use client';
import { useState } from "react";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react"


interface FormData {
    email: string;
    password: string;
}

export default function Form() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const schema = z.object({
        email: z.string().email("Invalid email format").min(1),
        password: z.string().min(8, "Password must be at least 8 characters"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError
    } = useForm<FormData>();

    const submitHandler = async (data: FormData) => {
        try {
            setLoading(true);
            await schema.parse(data);
            await signIn("credentials", { ...data, redirect: false, callbackUrl: "/dashboard" })
                .then((res) => {
                    if (res?.ok) {
                        router.push("/dashboard", { scroll: false });
                        toast.success("Login Successful", { position: "top-right" });
                    } else {
                        toast.error("Login Failed", { position: "top-right" });
                    }
                    setLoading(false);
                });
        } catch (error) {
            if (error instanceof z.ZodError) {
                // Set Zod errors to the form state
                error.errors.forEach((err) => {
                    if (err.path) {
                        setError(err.path[0] as keyof FormData, {
                            type: "manual",
                            message: err.message,
                        });
                    }
                });
            }
        }
    };

    return (
        <form className="grid gap-4" onSubmit={handleSubmit(submitHandler)}>
            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    {...register('email', { required: 'Email is required' })}
                />
                {errors.email && <p className="text-red-500 pt-1 text-xs">{errors.email.message}</p>}
            </div>
            <div className="grid gap-2">
                <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link
                        href="/forgot-password"
                        className="ml-auto inline-block text-sm underline"
                    >
                        Forgot your password?
                    </Link>
                </div>
                <Input id="password" type="password" required  {...register('password', { required: 'Password is required' })} />
                {errors.password && <p className="text-red-500 pt-1 text-xs">{errors.password.message}</p>}
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
                {
                    loading && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )
                }
                Sign In
            </Button>
            <Button variant="outline" className="w-full" disabled={loading}>
                Continue with Google
            </Button>
        </form>
    )
}
