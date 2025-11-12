import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-white p-6">
            <div className="max-w-lg w-full text-center">
                <h1 className="text-7xl font-extrabold text-gray-900">404</h1>
                <p className="mt-3 text-gray-600">
                    Page not found — we couldn&apos;t locate the resource.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center rounded-md px-6 py-3 bg-gray-900 text-white font-medium shadow-sm hover:bg-black transition"
                    >
                        Go to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
