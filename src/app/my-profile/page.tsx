"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";

export default function MyProfile() {
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();

    useEffect(() => {
        if (!isPending && !session) router.push("/login");
    }, [session, isPending, router]);

    if (isPending) return <div className="min-h-screen flex items-center justify-center"><span className="loading loading-spinner text-primary"></span></div>;

    return (
        <div className="min-h-screen bg-base-200 py-20 px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="bg-primary h-32 w-full"></div>
                <div className="px-8 pb-10">
                    <div className="relative -mt-16 mb-6">
                        <img 
                            src={session?.user.image || `https://ui-avatars.com/api/?name=${session?.user.name}`} 
                            className="w-32 h-32 rounded-full border-4 border-white shadow-lg bg-white" 
                        />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-800">{session?.user.name}</h2>
                    <p className="text-slate-500 mb-8">{session?.user.email}</p>
                    
                    <div className="divider"></div>
                    
                    <div className="flex gap-4">
                        <Link href="/update-profile" className="btn btn-primary flex-1">Update Information</Link>
                        <button onClick={() => authClient.signOut()} className="btn btn-outline">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}