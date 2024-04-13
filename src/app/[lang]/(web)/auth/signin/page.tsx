'use client'
import Link from "next/link"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface FormData {
    email: string;
    password: string;
}

export default function Signin() {
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
            await schema.parse(data);
            await signIn("credentials", { ...data, callbackUrl: "/dashboard" });
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
        <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
                <h1 className="text-3xl font-bold">Sign In</h1>
                <p className="text-balance text-muted-foreground">
                    Enter your email below to login to your account
                </p>
            </div>
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
                    <Input id="password" type="password" required   {...register('password', { required: 'Password is required' })} />
                    {errors.password && <p className="text-red-500 pt-1 text-xs">{errors.password.message}</p>}
                </div>
                <Button type="submit" className="w-full">
                    Sign In
                </Button>
                <Button variant="outline" className="w-full">
                    Continue with Google
                </Button>
            </form>
            <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/auth/signup" className="underline">
                    Sign up
                </Link>
            </div>
        </div>
    )
}
