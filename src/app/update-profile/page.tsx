"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function UpdateProfile() {
    const { data: session } = authClient.useSession();
    const [name, setName] = useState(session?.user.name || "");
    const [image, setImage] = useState(session?.user.image || "");
    const router = useRouter();

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // BetterAuth concepts: updateUser
        const { data, error } = await authClient.updateUser({
            name: name,
            image: image
        });

        if (error) {
            toast.error(error.message || "Failed to update profile");
        } else {
            toast.success("Profile Updated Successfully!");
            router.push("/my-profile");
            router.refresh();
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="card w-full max-w-md bg-white shadow-2xl p-8 rounded-3xl">
                <h2 className="text-3xl font-bold text-center text-primary mb-8">Update Profile</h2>
                <form onSubmit={handleUpdate} className="space-y-6">
                    <div className="form-control">
                        <label className="label font-bold">New Name</label>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold">New Photo URL</label>
                        <input type="text" value={image} onChange={e => setImage(e.target.value)} className="input input-bordered w-full" required />
                    </div>
                    <button type="submit" className="btn btn-primary w-full uppercase">Update Information</button>
                </form>
            </div>
        </div>
    );
}