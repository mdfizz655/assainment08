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
            // ১. পপ-আপ মেসেজ দেখানো
            toast.success("Registration Successful! Now please login.");
            
            // ২. অটো-লগইন বন্ধ করতে সাইন-আউট করা
            await authClient.signOut(); 
            
            // ৩. লগইন পেজে পাঠিয়ে দেওয়া
            router.push("/login");
            router.refresh();
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 py-10 px-4">
            <div className="card w-full max-w-md bg-base-100 shadow-xl p-8">
                <h2 className="text-3xl font-bold text-center text-primary mb-6 uppercase tracking-wider">Register</h2>
                <form onSubmit={handleRegister} className="space-y-4">
                    <div className="form-control">
                        <label className="label font-semibold">Name</label>
                        <input type="text" placeholder="Your Full Name" className="input input-bordered w-full" onChange={e => setName(e.target.value)} required />
                    </div>
                    <div className="form-control">
                        <label className="label font-semibold">Email</label>
                        <input type="email" placeholder="email@example.com" className="input input-bordered w-full" onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-control">
                        <label className="label font-semibold">Photo URL</label>
                        <input type="text" placeholder="https://image-link.com" className="input input-bordered w-full" onChange={e => setImage(e.target.value)} />
                    </div>
                    <div className="form-control">
                        <label className="label font-semibold">Password</label>
                        <input type="password" placeholder="Min 8 characters" className="input input-bordered w-full" onChange={e => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-primary w-full mt-4 uppercase font-bold">Create Account</button>
                </form>
                <p className="text-center mt-6 text-sm">
                    Already have an account? <Link href="/login" className="text-primary font-bold hover:underline">Login Here</Link>
                </p>
            </div>
        </div>
    );
}