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
        const { data, error } = await authClient.signUp.email({ email, password, name, image });
        if (error) {
            toast.error(error.message || "Registration failed!");
        } else {
            toast.success("Registration Successful! Now please login.");
            await authClient.signOut(); 
            router.push("/login");
            router.refresh();
        }
    };

    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 py-10 px-4">
            <div className="card w-full max-w-md bg-white shadow-2xl p-8 rounded-3xl">
                <h2 className="text-3xl font-bold text-center text-primary mb-6 uppercase tracking-widest">Register</h2>
                <form onSubmit={handleRegister} className="space-y-4">
                    <input type="text" placeholder="Full Name" className="input input-bordered w-full" onChange={e => setName(e.target.value)} required />
                    <input type="email" placeholder="Email" className="input input-bordered w-full" onChange={e => setEmail(e.target.value)} required />
                    <input type="text" placeholder="Photo URL" className="input input-bordered w-full" onChange={e => setImage(e.target.value)} />
                    <input type="password" placeholder="Password (Min 8 chars)" className="input input-bordered w-full" onChange={e => setPassword(e.target.value)} required />
                    <button type="submit" className="btn btn-primary w-full mt-4 uppercase font-bold">Create Account</button>
                </form>

                <div className="divider text-slate-400 text-sm">OR</div>

                <button 
                    onClick={handleGoogleLogin} 
                    className="btn btn-outline w-full flex items-center gap-3 border-slate-300 hover:bg-slate-50 text-slate-700"
                >
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="G" />
                    Register with Google
                </button>

                <p className="text-center mt-8 text-sm">
                    Already have an account? <Link href="/login" className="text-primary font-bold hover:underline">Login Here</Link>
                </p>
            </div>
        </div>
    );
}