"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const { data, error } = await authClient.signIn.email({
            email,
            password,
        });

        if (error) {
            toast.error(error.message || "Invalid email or password!");
        } else {
            toast.success("Logged in successfully!");
            router.push("/");
            router.refresh(); // Navbar আপডেট করার জন্য জরুরি
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="card w-full max-w-md bg-base-100 shadow-2xl p-8">
                <h2 className="text-3xl font-bold text-center text-primary mb-6">Login</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="form-control">
                        <label className="label">Email</label>
                        <input type="email" placeholder="email@example.com" className="input input-bordered w-full" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-control">
                        <label className="label">Password</label>
                        <input type="password" placeholder="******" className="input input-bordered w-full" onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-primary w-full mt-4 uppercase">Login</button>
                </form>
                <p className="text-center mt-6 text-sm">
                    Don't have an account? <Link href="/register" className="link link-primary font-bold">Register Now</Link>
                </p>
            </div>
        </div>
    );
}