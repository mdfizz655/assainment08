"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState("");
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        const { data, error } = await authClient.signUp.email({
            email,
            password,
            name,
            image,
        });

        if (error) {
            toast.error(error.message || "Registration failed!");
        } else {
            toast.success("Account created! Please login.");
            router.push("/login");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 py-10 px-4">
            <div className="card w-full max-w-md bg-base-100 shadow-xl p-8">
                <h2 className="text-3xl font-bold text-center text-primary mb-6">Register</h2>
                <form onSubmit={handleRegister} className="space-y-4">
                    <input type="text" placeholder="Name" className="input input-bordered w-full" onChange={e => setName(e.target.value)} required />
                    <input type="email" placeholder="Email" className="input input-bordered w-full" onChange={e => setEmail(e.target.value)} required />
                    <input type="text" placeholder="Photo URL" className="input input-bordered w-full" onChange={e => setImage(e.target.value)} />
                    <input type="password" placeholder="Password" className="input input-bordered w-full" onChange={e => setPassword(e.target.value)} required />
                    <button type="submit" className="btn btn-primary w-full uppercase">Create Account</button>
                </form>
                <p className="text-center mt-4">Already have an account? <Link href="/login" className="text-primary font-bold">Login</Link></p>
            </div>
        </div>
    );
}