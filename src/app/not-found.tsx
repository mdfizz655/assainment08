import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-9xl font-bold text-primary">404</h1>
            <h2 className="text-3xl font-semibold mt-4">Oops! Page Not Found</h2>
            <p className="mt-4 text-slate-500">The page you are looking for doesn't exist or has been moved.</p>
            <Link href="/" className="btn btn-primary mt-8 px-8">Back to Home</Link>
        </div>
    );
}