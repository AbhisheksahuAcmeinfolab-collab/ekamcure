"use client";

import { useRouter } from "next/navigation";

export default function ThankYouPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <h1 className="text-4xl font-bold text-green-700 mb-4">Thank You!</h1>
      <p className="mb-8 text-gray-700 max-w-md">
        Your message has been sent successfully. We will get back to you soon.
      </p>
      <button
        onClick={() => router.push("/")}
        className="px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700 transition"
      >
        Back to Home
      </button>
    </div>
  );
}
