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

    // ইমেইল লগইন ফাংশন
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const { data, error } = await authClient.signIn.email({ email, password });
        if (error) {
            toast.error(error.message || "Invalid Email or Password!");
        } else {
            toast.success("Welcome back!");
            router.push("/");
            router.refresh();
        }
    };

    // গুগল লগইন ফাংশন
    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/", // লগইন শেষে হোম পেজে যাবে
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="card w-full max-w-md bg-white shadow-2xl p-8 rounded-3xl border border-slate-100">
                <h2 className="text-3xl font-bold text-center text-primary mb-8 uppercase tracking-widest">Login</h2>
                
                <form onSubmit={handleLogin} className="space-y-4">
                    <input type="email" placeholder="Email" className="input input-bordered w-full" onChange={e => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Password" className="input input-bordered w-full" onChange={e => setPassword(e.target.value)} required />
                    <button type="submit" className="btn btn-primary w-full uppercase font-bold">Login</button>
                </form>

                <div className="divider text-slate-400 text-sm">OR</div>

                {/* গুগল লগইন বাটন */}
                <button 
                    onClick={handleGoogleLogin} 
                    className="btn btn-outline w-full flex items-center gap-3 border-slate-300 hover:bg-slate-50 text-slate-700"
                >
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="G" />
                    Continue with Google
                </button>

                <p className="text-center mt-8 text-sm">
                    Don't have an account? <Link href="/register" className="text-primary font-bold hover:underline">Register Now</Link>
                </p>
            </div>
        </div>
    );
}