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
            toast.error(error.message || "Invalid Email or Password!");
        } else {
            // লগইন মেসেজ দেখানো
            toast.success("Welcome back! Login Successful.");
            router.push("/");
            router.refresh(); // নেভবার আপডেট করার জন্য
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="card w-full max-w-md bg-base-100 shadow-2xl p-8">
                <h2 className="text-3xl font-bold text-center text-primary mb-6 uppercase tracking-wider">Login</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="form-control">
                        <label className="label font-semibold">Email</label>
                        <input type="email" placeholder="email@example.com" className="input input-bordered w-full" onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-control">
                        <label className="label font-semibold">Password</label>
                        <input type="password" placeholder="******" className="input input-bordered w-full" onChange={e => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-primary w-full mt-4 uppercase font-bold">Login</button>
                </form>
                <p className="text-center mt-6 text-sm">
                    Don't have an account? <Link href="/register" className="text-primary font-bold hover:underline">Register Now</Link>
                </p>
            </div>
        </div>
    );
}